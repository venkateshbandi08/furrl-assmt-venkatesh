import React from "react";
import Slider from "react-slick";
import { CiDiscount1 } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuLightbulb } from "react-icons/lu";
import { GoTag } from "react-icons/go";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const ProductDetails = () => {
  const location = useLocation();
  // receiving the props using useLocation
  const { eachProductDetails } = location.state || {};

  if (!eachProductDetails) {
    return <div>No product details available.</div>;
  }

  const { MRP, discountPercent, images, price, title } = eachProductDetails;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="each-product-details-container">
        <div className="image-slider-container">
          {/* // using slider to create slider for the product images */}
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  className="product-slide-image"
                  alt={`Product ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-details-section">
          <p className="product-details-product-name">{title}</p>
          <div className="product-details-price-container">
            <p className="product-details-price">₹{price.value}</p>
            <p className="product-details-mrp">{MRP.value}</p>
            <p className="product-details-discountprice">{discountPercent}%</p>
          </div>
        </div>
        <div className="coupon-container">
          <p className="coupon-name">
            use - FURRLNEW20 <CiDiscount1 className="coupon-icon" />
          </p>
        </div>
        <div className="product-description-container">
          <BsBoxSeam />
          <p className="product-description-heading">Product Description</p>
        </div>
        <div className="product-description-container">
          <CiDeliveryTruck />
          <p className="product-description-heading">Delivery</p>
        </div>
        <div className="product-description-container">
          <LuLightbulb />
          <p className="product-description-heading">
            Returns and size exchanges enabled
          </p>
        </div>
        <div className="product-description-container">
          <GoTag />
          <p className="product-description-heading">About the Brand</p>
        </div>
      </div>
      <div className="button-container-fixed">
        <button className="add-to-bag-button">Add to Bag</button>
      </div>
    </>
  );
};

export default ProductDetails;
