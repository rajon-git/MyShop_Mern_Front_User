import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";

function SingleBlog() {
  const dispatch = useDispatch();

  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  console.log(getBlogId);
  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    dispatch(getABlog(getBlogId));
  };
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <IoIosArrowRoundBack className="fs-4" /> Go back to blogs
              </Link>
              <h3 className="title">{blogState?.title}</h3>
              <div className="blog-image1-container">
                <img
                  src={
                    blogState?.images[0]?.url ? blogState?.images[0]?.url : blog
                  }
                  className="blog-image1 img-fluid my-4"
                  alt="blog"
                />
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: blogState?.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleBlog;
