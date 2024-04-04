import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import tab1 from "../images/tab1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

function ProductCard(props) {
  const { grid, data } = props;
  let location = useLocation();
  console.log(data);
  if (!Array.isArray(data) || data.length === 0) {
    return null; // or return a loading indicator or an error message
  }
  return (
    <>
      {data?.map((item, i) => {
        return (
          <div
            className={`${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
          >
            <Link
              to={`${
                location.pathname === "/"
                  ? "/product/:id"
                  : location.pathname === "/product/:id"
                  ? "/product/1"
                  : ":id"
              }`}
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <img src={wish} alt="wish" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0].url}
                  alt="product image"
                  className="img-fluid  mx-auto"
                  width={160}
                />
                <img
                  src={tab1}
                  alt="product image"
                  className="img-fluid  mx-auto"
                  width={160}
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalrating.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  {item?.description}
                  {/* dangerouslySetInnerHTML={{__html: item?.description}} */}
                </p>
                <p className="price">{item?.price}</p>
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
        );
      })}
    </>
  );
}

export default ProductCard;
