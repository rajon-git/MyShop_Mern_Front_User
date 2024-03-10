import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import watch from"../images/watch.jpg"
import tab1 from "../images/tab1.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wish" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              alt="product image"
              className="img-fluid"
            />
            <img
              src={tab1}
              alt="product image"
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids Headphone Bult 10 pack multi colored studesnt
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Get started with Bootstrap, the world's most popular framework for
              building responsive, mobile-first sites, with jsDelivr and a
              template starter page.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="prodcompare" />
              </button >
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button >
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add-cart" />
              </button >
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              alt="product image"
              className="img-fluid"
            />
            <img
              src={tab1}
              alt="product image"
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids Headphone Bult 10 pack multi colored studesnt
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Get started with Bootstrap, the world's most popular framework for
              building responsive, mobile-first sites, with jsDelivr and a
              template starter page.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="prodcompare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add-cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
