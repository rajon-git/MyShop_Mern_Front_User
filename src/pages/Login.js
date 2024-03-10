import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput"

function Login() {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email"
                    placeholder="email"
                    name="email"
                    className="form-control"/>
                <CustomInput type="password"
                    placeholder="password"
                    name="password"
                    className="form-control"/>
                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/sign-up" className="button signup">
                      Signup
                    </Link>
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

export default Login;
