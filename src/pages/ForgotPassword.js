import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput"

function ForgotPassword() {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center my-2 mt-2">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email"
                    placeholder="email"
                    name="email"
                    className="form-control"/>
                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>

                    <Link to="/login">Cancel</Link>
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

export default ForgotPassword;
