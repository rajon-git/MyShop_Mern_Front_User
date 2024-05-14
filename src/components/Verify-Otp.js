import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import { useNavigate } from "react-router-dom";
import { VerifyOTPRequest } from "../../APIRequest/APIRequest";
import { ErrorToast } from "../../helper/FormHelper";
import { getEmail } from "../../helper/SessionHelper";

const VerifyOTP = () => {
  let navigate = useNavigate();

  let InputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "45px",
    borderRadius: "3px",
    height: "45px",
    fontSize: "32px",
    border: "1px solid lightskyblue",
    boxSizing: "border-box",
    color: "black",
    backgroundColor: "white",
    borderColor: "lightgrey",
  };
  let [otp, setOtp] = useState("");

  let submitOtp = async () => {
    if (otp.length === 6) {
      const isVerified = await VerifyOTPRequest(getEmail(), otp);
      if (isVerified) {
        navigate("/createPassword");
      }
    } else {
      ErrorToast("OTP must Be 6 Digits");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>OTP VERIFICATION </h4>
                <p>
                  A 6 Digit verification code has been sent to your email
                  address.
                </p>
                <ReactCodeInput
                  onChange={(value) => setOtp(value)}
                  type="number"
                  fields={6}
                  inputStyle={InputStyle}
                />
                <br /> <br />
                <button
                  onClick={submitOtp}
                  className="btn btn-primary h6 float-end w-100 animated fadeInUp"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;