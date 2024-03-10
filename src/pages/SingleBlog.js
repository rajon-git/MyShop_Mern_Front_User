import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import blog from "../images/blog-1.jpg"
import Container from "../components/Container";

function SingleBlog() {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <IoIosArrowRoundBack className="fs-4"/> Go back to blogs
                </Link>
                <h3 className="title">
                  A beautiful Friday Morning Renaissance
                </h3>
                <img
                   src={blog}
                  className="w-100 img-fluid my-4"
                  alt="blog"
                />
                <p>
                  But if you don't know Handlebars, learning it can be a long
                  and difficult process. If you are already a Next.js developer
                  and you don't know Handlebars, creating a new theme for your
                  Ghost-based site can be tough.In the article, I will teach you
                  how to use Ghost CMS as a backend and Next.js as a frontend. I
                  will guide you through everything related to Nextjs 13 app
                  directory and the Ghost CMS API.
                </p>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  );
}

export default SingleBlog;
