import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";

function Blog() {
  const dispatch = useDispatch();

  const blogState = useSelector((state) => state.blog.blog);
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-6"> {/* Adjust column size based on screen size */}
      <div className="filter-card mb-3">
        <h3 className="filter-title">Find By Categories</h3>
        <div>
          <ul className="ps-0">
            <li>Watch</li>
            <li>TV</li>
            <li>Camera</li>
            <li>Laptop</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-lg-9 col-md-8 col-sm-6"> {/* Adjust column size based on screen size */}
      <div className="row">
        {blogState && blogState?.map((item, index) => {
          return (
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3" key={index}> {/* Adjust column size based on screen size */}
              <BlogCard
                id={item?._id}
                title={item?.title}
                description={item?.description}
                image={item?.images[0]?.url}
                date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")}
              />
            </div>
          );
        })}
      </div>
    </div>
  </div>
</Container>

    </>
  );
}

export default Blog;
