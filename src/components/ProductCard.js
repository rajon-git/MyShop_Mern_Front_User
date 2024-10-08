import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import wish from "../images/wish.svg";
import tab1 from "../images/tab1.jpg";
import view from "../images/view.svg";
import { useDispatch } from "react-redux";
import { addWishlist } from "../features/products/productSlice";

function ProductCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { grid, data } = props;
  let location = useLocation();

  const addtowish = (id) => {
    dispatch(addWishlist(id));
    setTimeout(() => {
      navigate("/wishlist");
    }, 300);
  };
  return (
    <>
      {data &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                location.pathname === "/product" ? `gr-${grid}` : "col-3"
              }`}
            >
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent"
                    onClick={(e) => {
                      addtowish(item?._id);
                    }}
                  >
                    <img src={wish} alt="wish" />
                  </button>
                </div>
                <div className="product-image">
                  <img
                    src={item?.images[0]?.url}
                    alt="product image"
                    className="img-fluid  mt-4 product-image-card"
                  />
                  <img
                    src={item?.images[1]?.url}
                    alt="product image"
                    className="img-fluid  mt-4 product-image-card"
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
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                  <p className="price">{item?.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <Link
                      to={item && "/product/" + item?._id}
                      className="border-0 bg-transparent"
                    >
                      <img src={view} alt="view" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ProductCard;
