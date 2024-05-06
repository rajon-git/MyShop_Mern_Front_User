import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAProduct } from "../features/products/productSlice";

function Header() {
  const [paginate, setPaginate] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = useState(null);

  const userCartState = useSelector((state) => state?.auth?.cartProducts ?? []);
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state?.product?.product);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) *
          Number(userCartState[index].price);
      setTotal(sum);
    }
  }, [userCartState]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProduct(data);
  }, [productState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 and Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white  mb-0">
                Hotline:{" "}
                <a className="text-white" href="01990020467">
                  01990020467
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-3 col-6">
              <h2>
                <Link className="text-white">Developers</Link>
              </h2>
            </div>
            <div className="col-lg-5 col-md-6 col-6 mt-3 mt-md-0">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0]?.prod}`);
                    dispatch(getAProduct(selected[0]?.prod));
                  }}
                  options={product}
                  paginate={paginate}
                  labelKey={"name"}
                  minLength={2}
                  placeholder="Search for products here..."
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <IoIosSearch className="fs-6 search-icon" />
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-md-3 col-12 mt-3 mt-md-0">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={authState?.user === null ? "/login" : "/my-profile"}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/user.svg" alt="user" />
                    {authState?.user === null ? (
                      <p className="mb-0">Login</p>
                    ) : (
                      <p className="mb-0">
                        Wellcome {authState?.user?.firstName}
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cartpage"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {userCartState && userCartState?.length
                          ? userCartState?.length
                          : 0}
                      </span>
                      <p className="mb-0">$ {total && total ? total : 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom "> 
                <div className="menu-links mt-3 mt-md-0">
                  <div className="d-flex flex-wrap align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/my-orders">My Orders</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button
                      onClick={handleLogout}
                      type="button"
                      className="border border-0 bg-transparent text-white"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
