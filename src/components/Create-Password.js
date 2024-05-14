import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ResetPassRequest } from "../../APIRequest/APIRequest";
import { ErrorToast, IsEmpty } from "../../helper/FormHelper";
import { getEmail, getOtp } from "../../helper/SessionHelper";

const CreatePassword = () => {
  let PasswordRef,
    ConfirmPasswordRef = useRef();
  let navigate = useNavigate();

  const ResetPassword = async () => {
    let Password = PasswordRef.value;
    let ConfirmPassword = ConfirmPasswordRef.value;
    if (IsEmpty(Password)) {
      ErrorToast("Password Required");
    } else if (IsEmpty(ConfirmPassword)) {
      ErrorToast("Confirm Password Required");
    } else if (Password !== ConfirmPassword) {
      ErrorToast("Password & Confirm Password Should be Same");
    } else {
      const isVerified = await ResetPassRequest(getEmail(), getOtp(), Password);
      if (isVerified) {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>Set New Password</h4>
                <br />
                <label>Your Email Address</label>
                <input
                  readOnly={true}
                  value={getEmail()}
                  type="email"
                  className="form-control animated fadeInUp"
                  placeholder="enter your email..."
                />
                <br />
                <label>New Password</label>
                <input
                  ref={(input) => (PasswordRef = input)}
                  type="password"
                  className="form-control animated fadeInUp"
                  placeholder="New password..."
                />
                <br />
                <label>Conform Password</label>
                <input
                  ref={(input) => (ConfirmPasswordRef = input)}
                  type="password"
                  className="form-control animated fadeInUp"
                  placeholder="conform password..."
                />
                <br /> <br />
                <button
                  onClick={ResetPassword}
                  className="btn h6 btn-primary float-end w-100 animated fadeInUp"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePassword;