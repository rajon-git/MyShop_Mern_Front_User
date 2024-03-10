import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

function Signup() {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="tel"
                      placeholder="mobile number"
                      name="mobile"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password</Link>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  );
}

export default Signup;
