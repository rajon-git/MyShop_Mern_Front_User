import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";

function Wishlist() {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistfromdb();
  }, []);
  const getWishlistfromdb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    src={item?.images[0]?.url ? item?.images[0].url : "images/cross.svg"}
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image bg-white">
                    <img
                      src={item?.images[0].url ? item?.images[0].url : "images/watch.jpg"}
                      className="img-fluid d-block mx-auto"
                      alt="watch"
                      width={160}
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">
                      {item?.title}
                    </h5>
                    <h6 className="price">$ {item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Wishlist;
