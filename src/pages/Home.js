import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
import { addWishlist, getAllProducts } from "../features/products/productSlice";
import ReactStars from "react-rating-stars-component";
import { useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import tab1 from "../images/tab1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { Card } from "react-bootstrap";
import tshirtImg from "../images/tshirt.png";
import laptopImg from "../images/laptop-open-icon.png";
import mobileImg from "../images/545194.png";
import watchImg from "../images/icons8-smart-watch-96.png";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const addtowish = (id) => {
    dispatch(addWishlist(id));
  };

  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);

  // Sort the productState array based on sales count or any other relevant metric
  const sortedProducts = [...productState].sort((a, b) => b.sold - a.sold);

  // Get the top 4 products
  const top4Products = sortedProducts.slice(0, 4);

  const tshirtCount = Array.isArray(productState)
    ? productState.reduce((count, item) => {
        if (item?.category === "Tshirt") {
          return count + 1;
        }
        return count;
      }, 0)
    : 0;

  const watchCount = Array.isArray(productState)
    ? productState.reduce((count, item) => {
        if (item?.category === "Watch") {
          return count + 1;
        }
        return count;
      }, 0)
    : 0;

  const laptopCount = Array.isArray(productState)
    ? productState.reduce((count, item) => {
        if (item?.category === "Laptop") {
          return count + 1;
        }
        return count;
      }, 0)
    : 0;

  const mobileCount = Array.isArray(productState)
    ? productState.reduce((count, item) => {
        if (item?.category === "Mobile") {
          return count + 1;
        }
        return count;
      }, 0)
    : 0;

  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  const getProducts = () => {
    dispatch(getAllProducts());
  };
  return (
    <>
      <Container className="home-wrapper-1 py-5">
        <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-4 mb-0 mb-lg-4">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Super chraged for pros</h4>
                <h5>ipad s13+ pro</h5>
                <p>From $999.0o or $41.62/mo.</p>
                <Link to={"/product"} className="button">
                  Buy now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mt-4 mb-4 mb-lg-4">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              {Array.isArray(productState) &&
                productState.slice(0, 4).map((product, index) => (
                  <div className="small-banner position-relative" key={index}>
                    <img
                      src={product?.images[0]?.url}
                      className="img-fluid rounded-3 products-image"
                      alt={product?.title}
                    />
                    <div className="small-banner-content position-absolute text-light">
                      <h5
                        className="m-0 font-weight-bold"
                        style={{ color: "#0D1865" }}
                      >
                        New Arraival
                      </h5>
                      <h6 className=" text-dark">{product?.category}</h6>
                      <p className="m-0">
                        From {product?.price} BDT <br /> or{" "}
                        {product?.monthlyPayment}/mo.
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>

      <Container className="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex flex-wrap justify-content-center align-items-center">
              {services?.map((service, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4"
                  key={index}
                >
                  <div className="d-flex align-items-center gap-15">
                    <img src={service.image} alt="services" />
                    <div>
                      <h6>{service.title}</h6>
                      <p className="mb-0">{service.tagline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Tshirts</h6>
                  <p>{tshirtCount} Items</p>
                </div>
                <img src={tshirtImg} alt="tshirt" width={70} />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Laptop</h6>
                  <p>{laptopCount} Items</p>
                </div>
                <img src={laptopImg} alt="camera" width={70} />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>{watchCount} Items</p>
                </div>
                <img src={watchImg} alt="camera" width={70} />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Mobile</h6>
                  <p>{mobileCount} Items</p>
                </div>
                <img src={mobileImg} alt="camera" width={70} />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags === "featured") {
                return (
                  <div
                    key={index}
                    className={`${"col-lg-3 col-md-6 col-sm-6 col-12 mb-4"}`}
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
                          src={item?.images[0].url}
                          alt="product image"
                          className="img-fluid mx-auto"
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

                        <p className="price">{item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                          {/* <button className="border-0 bg-transparent">
                            <img src={addcart} alt="add-cart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="famous-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading mb-4">Best Selling Products</h3>
          </div>
          {top4Products.map((product, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div
                className={`card h-100 border-0 shadow${
                  hoveredIndex === index ? " hovered" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={product?.images[0]?.url}
                  className="card-img-top img-fluid rounded mx-auto mt-4"
                  alt={product?.title}
                  style={{ width: "200px", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product?.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {product?.brand}
                  </h6>
                  <p className="card-text">
                    ${product?.price} or ${product?.monthlyPrice}/mo. for 24
                    mo.*
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item?.tags === "special") {
                  return (
                    <SpecialProduct
                      key={index}
                      id={item?._id}
                      brand={item?.brand}
                      image={item?.images[0]?.url}
                      title={item?.title}
                      totalrating={item?.totalrating.toString()}
                      price={item?.price}
                      quantity={item?.quantity}
                      sold={item?.sold}
                    />
                  );
                }
              })}
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our popular products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div
                    key={index}
                    className="col-lg-3 col-md-4 col-sm-6 col-12 g-3"
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
                          src={item?.images[0].url}
                          alt="product image"
                          className="img-fluid mx-auto"
                          width={160}
                        />
                        <img
                          src={tab1}
                          alt="product image"
                          className="img-fluid mx-auto"
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
                        <p className="price">{item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null; // Ensure all code paths return a value
            })}
        </div>
      </Container>

      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our latest blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 3) {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 g-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
}

export default Home;
