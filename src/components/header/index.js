import React, { useState, useEffect, useCallback } from "react";
import { IoBookmarkOutline, IoBagHandleOutline } from "react-icons/io5";
import "./index.css";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className={`navbar-container ${showNavbar ? "visible" : "hidden"}`}>
      <div></div>
      <div>
        <h2 className="nav-heading"> Furrrl </h2>
      </div>
      <div className="nav-icons-container">
        <a href="https://furrl.in/wishlist">
          <IoBookmarkOutline className="nav-icon-item" />
        </a>
        <a href="https://furrl.in/cart">
          <IoBagHandleOutline className="nav-icon-item" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
