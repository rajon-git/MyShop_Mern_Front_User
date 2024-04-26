import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import { createAnOrder } from "../features/user/userSlice";

const shippingSchema = yup.object({
  firstName: yup.string().required("FirstName  is required"),
  lastName: yup.string().required("LastName  is required"),
  address: yup.string().required("Address  is required"),
  state: yup.string().required("State  is required"),
  city: yup.string().required("city  is required"),
  country: yup.string().required("Country  is required"),
  other: yup.string().required("Appartment, suite, etc  are required"),
  pincode: yup.string().required("PinCode  is required"),
});

function Checkout() {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo,setShippingInfo] = useState(null);
  const [paymentInfo,setPaymentInfo] = useState({razorpayPaymentId: "", razorpayOrderId: ""});
  const [cartProductState,setCartProductState] = useState([])

  const cartState = useSelector((state) => state?.auth?.cartProducts);
  useEffect(() => {
    let sum = 0;
    if (cartState) {
      // Check if cartState is defined
      for (let index = 0; index < cartState?.length; index++) {
        sum =
          sum +
          Number(cartState[index].quantity) * Number(cartState[index].price);
        setTotalAmount(sum);
      }
    } else {
      setTotalAmount(0);
    }
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other:""
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
        shippingInfo(values);
        checkoutHandler();
    },
  });

  const loadScript = (src)=>{
    return new Promise((resolve)=>{
        const script = document.createElement("script");
        script.src = src;
        script.onload = () =>{
            resolve(true);
        }
        script.onerror = () =>{
            resolve(false);
        }
        document.body.appendChild(script);
    })
  }
   useEffect(()=>{
    let items =[]
    for (let index = 0; index < cartState?.length; index++) {
      items.push({product:cartState[index].productId._id,quantity:cartState[index].productId.quantity,color:cartState[index].color._id,price:cartState[index].productId.price})
      
    }
    setCartProductState(items);
   },[])
  const checkoutHandler = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if (!res)
    {
        alert("Razor load failed");
        return;
    }
    const result = await axios.post("http://localhost:4000/api/user/order/checkout",totalAmount,config);
    if(!result)
    {
        alert("Something went wrong");
        return ;
    }
    const {amount,id:order_id,currency} = result.data.order;
    const options = {
        key: "rzp_test_6ETWefW4U9ymSd", // Enter the Key ID generated from the Dashboard
        amount: amount,
        currency: currency,
        name: "Rajon",
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
            };

            const result = await axios.post("http://localhost:4000/api/user/order/paymentVerification", data,config);

            setPaymentInfo({
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
            })
           
            dispatch(createAnOrder({totalPrice:totalAmount,totalPriceAfterDiscount:totalAmount,orderItems:cartProductState,paymentInfo,shippingInfo}))
        },
        prefill: {
            name: "Rajon",
            email: "rajon@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Rajon Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="webite-name">Dev Corners</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol class="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark  total-price">
                      Cart
                    </Link>
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active total-price">
                    Shipping
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">Rajon (rajon@gmail.com)</p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="Bangladesh" selected >
                      Bangladesh
                    </option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    placeholder="First Name"
                    className="form-control"
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    placeholder="Last Name"
                    className="form-control"
                  />
                   <div className="error ms-2 my-1">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                    placeholder="Address"
                    className="form-control"
                  />
                   <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    name="other"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                    placeholder="Appartment, suite, etc"
                    className="form-control"
                  />
                   <div className="error ms-2 my-1">
                    {formik.touched.other && formik.errors.other}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                    placeholder="City"
                    className="form-control"
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")} className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="Dhaka" selected >
                      Dhaka
                    </option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    name="pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                    placeholder="Zip Code"
                    className="form-control"
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <IoMdArrowRoundBack className="me-2" /> Return To Cart
                    </Link>
                    <Link to="/shipping" className="button">
                      Continue To Shipping
                    </Link>
                    <button className="button" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 mb-2 align-items-center"
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            width={100}
                            height={100}
                            src={
                              item?.productId?.images[0]?.url
                                ? item?.productId?.images[0]?.url
                                : watch
                            }
                            alt="watch"
                          />
                        </div>
                        <div className="title">
                          <h5 className="total-price">
                            {" "}
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">{item?.color?.title}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">
                          $ {item?.price * item?.quantity}
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ {totalAmount ? totalAmount : 0}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 80</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center order-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                $ {totalAmount ? totalAmount + 80 : 0}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
