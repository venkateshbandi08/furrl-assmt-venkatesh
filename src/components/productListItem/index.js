import React from "react";
import { useNavigate } from "react-router-dom";
import { MdIosShare } from "react-icons/md";
import "./index.css";

const ProductItem = (props) => {
  const { eachProductDetails, index } = props;
  const { MRP, discountPercent, vendor, images, price, title } =
    eachProductDetails;

  // initialising useNavigate()
  const navigate = useNavigate();

  // displaying only upto few charaters, to avoid lengthy names
  const truncateTitle = (title) => {
    return title.length > 20 ? `${title.slice(0, 20)}...` : title;
  };

  const thumbnailImage = images[0].src;

  // handling function to handle onclick to display respective product detials
  const handleClick = () => {
    navigate("/product-details", { state: { eachProductDetails } });
  };

  // handling function to display share-product-details
  const handleOnShare = (e) => {
    e.stopPropagation(); // stops the parent element from getting clicked !
    navigate("/share-product-details", { state: { eachProductDetails } });
  };

  return (
    <li
      className={
        (index + 1) % 5 === 0
          ? "product-item-container-large-size"
          : "product-item-container"
      }
      // for an effective user experience every 5th product is displayed as highlighted with large size comparing to others
    >
      <div
        className="product-item-image"
        style={{
          backgroundImage: `url(${thumbnailImage})`,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {/* // share button */}
        <MdIosShare className="share-button" onClick={handleOnShare} />
      </div>
      <div className="product-main-details">
        <p className="product-vendor"> {vendor} </p>
        <p className="product-name"> {truncateTitle(title)} </p>
        <div className="product-price-details">
          <p className="product-current-price"> Rs.{MRP.value} </p>
          <p className="product-actual-price"> Rs.{price.value} </p>
          <p className="product-discount-rate"> {discountPercent}% </p>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
