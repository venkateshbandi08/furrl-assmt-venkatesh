import React, { useState, useEffect } from "react";
import Header from "../header";
import { TbPointFilled } from "react-icons/tb";
import TopItem from "../topItem";
import AllCategories from "../categories";
import ProductItem from "../productListItem";
import { TailSpin } from "react-loader-spinner";
import "./index.css";

const Home = () => {
  const [productCount, setProductCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);

  // fetch function to get all the listed products from the api
  useEffect(() => {
    const handleFurrlApi = async () => {
      const totalPages = 100;
      let allProducts = [];

      // looping through all the pages to get the data from all the pages
      for (let page = 1; page <= totalPages; page++) {
        const payload = {
          entity: "vibe",
          filters: [],
          id: "#HomeHunts",
          page: page,
          pageSize: 10,
        };

        try {
          const response = await fetch(
            "https://api.furrl.in/api/v2/listing/getListingProducts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Appversion: "1.0.234+145",
                Deviceid: "your-device-id",
                Origin: "https://web.furrl.in",
                Referer: "https://web.furrl.in/",
                "Sec-Ch-Ua":
                  '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                "Sec-Ch-Ua-Mobile": "?1",
                "Sec-Ch-Ua-Platform": '"Android"',
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "User-Agent":
                  "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
                Visitid: "rzUWvbLetJ_8rWZnhOE5v",
              },
              body: JSON.stringify({ input: payload }),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log("Response data:", data);

          allProducts = allProducts.concat(
            data.data.getListingProducts.products
          );

          if (page === 1) {
            setProductCount(data.data.getListingProducts.totalProducts);
          }
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }

      setProductsList(allProducts);
      setIsLoading(false);
    };

    handleFurrlApi();
  }, []);

  return (
    <div className="home-container">
      {/* rendering the navbar */}
      <Header />
      {/* checking weather the data is loaded or not and displaying the loading spinner or the data respectively */}
      {isLoading ? (
        <div className="loader-container">
          <TailSpin height={50} width={50} color="purple" ariaLabel="loading" />
        </div>
      ) : (
        <>
          {/* rendering the topItem component */}
          <TopItem />
          <div className="products-listing-container">
            <div className="products-listing-details-container">
              <p>
                <span className="shop-products-name">Shop products </span>
                <TbPointFilled className="point-style" />
                <span className="products-count-number">
                  {productCount} products
                </span>
              </p>
            </div>
          </div>
          <AllCategories />
          {/* rendering all the listed products */}
          <ul className="products-list-container">
            {productsList.map((eachItem, index) => (
              <ProductItem
                eachProductDetails={eachItem}
                index={index}
                key={eachItem.id}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
