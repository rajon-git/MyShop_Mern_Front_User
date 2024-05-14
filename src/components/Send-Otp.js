import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { VerifyEmailRequest } from "../../APIRequest/APIRequest";
import { ErrorToast, IsEmail } from "../../helper/FormHelper";

const SendOTP = () => {
  let emailRef = useRef();
  let navigate = useNavigate();

    let submitOtpRequest = () => {
      let email = emailRef.value;
      if (IsEmail(email)) {
        ErrorToast("Valid Email Address Required !");
      } else {
        VerifyEmailRequest(email).then((result) => {
          if (result === true) {
            navigate("/VerifyOtp");
          }
        })
      }
    };

//   const submitOtpRequest = async () => {
//     const emailInput = emailRef.value;
//     if (IsEmail(emailInput)) {
//       ErrorToast("Valid Email Address Required !");
//       return;
//     }

//     const isVerified = await VerifyEmailRequest(emailInput);
//     console.log(isVerified);
//     if (isVerified) {
//       navigate("/VerifyOTP");
//     }
//   };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>Email Address</h4>
                <br />
                <label>Your email address</label>
                <input
                  ref={(input) => (emailRef = input)}
                  type="email"
                  className="form-control animated fadeInUp"
                  placeholder="enter your email..."
                />
                <br />
                <button
                  onClick={submitOtpRequest}
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

export default SendOTP;