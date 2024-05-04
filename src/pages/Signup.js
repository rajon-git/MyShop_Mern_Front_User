import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput"
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

const signupSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Email should be valid").required("Email address is required"),
  mobile: yup.string().required("Mobile number is required"),
  password: yup.string().required("Password is required")
});

function Signup() {
  const authState = useSelector((state)=>state?.auth);
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile:'',
      password:''
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(registerUser(values));
        navigate('/login')
      } catch (error) {
        toast.error("An error occurred during registration.");
      }
    },
  });
  useEffect(()=>{
    if(authState.createdUser !== null && authState.isSuccess === true)
      {
        navigate("/");
      }
  },[authState,navigate]);
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                  <CustomInput type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value = {formik.values.firstName}
                      onChange = {formik.handleChange("firstName")}
                      onBlur = {formik.handleBlur("firstName")}
                  />
                  <div className="error">
                    {
                      formik.touched.firstName && formik.errors.firstName
                    }
                  </div>
                  <CustomInput type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value = {formik.values.lastName}
                      onChange = {formik.handleChange("lastName")}
                      onBlur = {formik.handleBlur("lastName")}
                  />
                  <div className="error">
                    {
                      formik.touched.lastName && formik.errors.lastName
                    }
                  </div>
                  <CustomInput type="email"
                      placeholder="email"
                      name="email"
                      className="form-control"
                      value = {formik.values.email}
                      onChange = {formik.handleChange("email")}
                      onBlur = {formik.handleBlur("email")}
                  />
                  <div className="error">
                    {
                      formik.touched.email && formik.errors.email
                    }
                  </div>
                  <CustomInput type="tel"
                      placeholder="mobile number"
                      name="mobile"
                      className="form-control"
                      value = {formik.values.mobile}
                      onChange = {formik.handleChange("mobile")}
                      onBlur = {formik.handleBlur("mobile")}
                  />
                  <div className="error">
                    {
                      formik.touched.mobile && formik.errors.mobile
                    }
                  </div>
                  <CustomInput type="password"
                      placeholder="password"
                      name="password"
                      className="form-control"
                      value = {formik.values.password}
                      onChange = {formik.handleChange("password")}
                      onBlur = {formik.handleBlur("password")}
                  />
                  <div className="error">
                    {
                      formik.touched.password && formik.errors.password
                    }
                  </div>
                  <div>
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
