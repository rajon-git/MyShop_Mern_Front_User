// import React, { useEffect, useState } from "react";
// import Meta from "../components/Meta";
// import BreadCrumb from "../components/BreadCrumb";
// import watch from "../images/watch.jpg";
// import { MdDelete } from "react-icons/md";
// import { Modal, Button } from "react-bootstrap";
// import Container from "../components/Container";
// import { useDispatch, useSelector } from "react-redux";
// import Form from "react-bootstrap/Form";
// import { MdModeEditOutline } from "react-icons/md";
// import * as yup from "yup";
// import {
//   couponApply,
//   createAnOrder,
//   deleteCartProduct,
//   deleteUserCart,
//   getUserCart,
//   updateCartProduct,
// } from "../features/user/userSlice";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { toast } from "react-toastify";

// const shippingSchema = yup.object({
//   firstName: yup.string().required("FirstName is required"),
//   lastName: yup.string().required("LastName is required"),
//   state: yup.string().required("State is required"),
//   city: yup.string().required("City is required"),
//   country: yup.string().required("Country is required"),
//   other: yup.string().required("Others are required"),
//   pincode: yup.string().required("PinCode is required"),
// });

// function CartPage() {
//   const [productUpdateDetail, setProductUpdateDetail] = useState(null);
//   const [shippingInfo, setShippingInfo] = useState(null);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery"); // State to track selected payment method
//   const [showModal, setShowModal] = useState(false);
//   const [confirmOrder, setConfirmOrder] = useState(false); // State to track confirmation of order
//   const [couponCode, setCouponCode] = useState("");
//   const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const userCartState = useSelector((state) => state?.auth?.cartProducts);
//   const authState = useSelector((state) => state?.auth?.user);
//   const couponState = useSelector((state) => state?.auth?.couponApplied);
//   const orderState = useSelector((state)=>state?.auth?.orderProduct)

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       state: "",
//       city: "",
//       country: "",
//       pincode: "",
//       other: "",
//     },
//     validationSchema: shippingSchema,
//     onSubmit: (values, { resetForm }) => {
//       setShippingInfo(values);
//       setShowModal(false); // Close the modal after submitting shipping information
//       resetForm(); // Reset the form fields
//     },
//   });
//   useEffect(() => {
//     dispatch(getUserCart());
//   }, []);

//   useEffect(() => {
//     if (productUpdateDetail !== null) {
//       dispatch(
//         updateCartProduct({
//           cartItemId: productUpdateDetail?.cartItemId,
//           quantity: productUpdateDetail?.quantity,
//         })
//       );
//       setTimeout(() => {
//         dispatch(getUserCart());
//       }, 300);
//     }
//   }, [dispatch, productUpdateDetail]);

//   useEffect(() => {
//     let sum = 0;
//     for (let index = 0; index < userCartState?.length; index++) {
//       sum +=
//         Number(userCartState[index].quantity) *
//         Number(userCartState[index].price);
//       setTotalAmount(sum);
//     }
//   }, [userCartState]);

//   const deleteACartProduct = (id) => {
//     dispatch(deleteCartProduct(id));
//     setTimeout(() => {
//       dispatch(getUserCart());
//     }, 200);
//   };

//   const handleEditClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handlePlaceOrder = () => {
//     // Set the state to open the confirmation modal
//     setConfirmOrder(true);
//   };

//   const confirmOrderAndDispatch = () => {
//     if (userCartState?.length > 0) {
//       if (shippingInfo) {
//         dispatch(
//           createAnOrder({
//             shippingInfo: shippingInfo,
//             orderItems:
//               userCartState &&
//               userCartState?.map((item) => ({
//                 product: item?.productId?._id,
//                 color: item?.color?._id,
//                 quantity: item?.quantity,
//                 price: item?.price,
//               })),
//             totalPrice: totalAmount,
//             totalPriceAfterDiscount: totalPriceAfterDiscount, // You may adjust this as needed
//             paymentInfo: {
//               // Add payment details here if required
//               method: paymentMethod, // Include the selected payment method
//             },
//           })
//         ).then(() => {
//           // Dispatch an action directly to reset the coupon state after the order is created
//           dispatch({ type: 'RESET_COUPON_STATE' });

//           // Reset other states
//           setConfirmOrder(false);
//           dispatch(deleteUserCart());
//           navigate("/confirm-order");
//           setShippingInfo(null);
//           setTotalAmount(0);
//           setPaymentMethod("cash_on_delivery");
//           setCouponCode("");
//           setTotalPriceAfterDiscount(0);
//         });
//       } else {
//         toast("Please add shipping info & payment method");
//       }
//     } else {
//       navigate("/product");
//     }
//   };

//   // const confirmOrderAndDispatch = () => {
//   //   if (userCartState?.length > 0) {
//   //     if (shippingInfo) {
//   //       dispatch(
//   //         createAnOrder({
//   //           shippingInfo: shippingInfo,
//   //           orderItems:
//   //             userCartState &&
//   //             userCartState?.map((item) => ({
//   //               product: item?.productId?._id,
//   //               color: item?.color?._id,
//   //               quantity: item?.quantity,
//   //               price: item?.price,
//   //             })),
//   //           totalPrice: totalAmount,
//   //           totalPriceAfterDiscount: totalPriceAfterDiscount, // You may adjust this as needed
//   //           paymentInfo: {
//   //             // Add payment details here if required
//   //             method: paymentMethod, // Include the selected payment method
//   //           },
//   //         })
//   //       );
//   //       setConfirmOrder(false);
//   //       dispatch(deleteUserCart());
//   //       navigate("/confirm-order");
//   //       setShippingInfo(null);
//   //       setTotalAmount(0);
//   //       setPaymentMethod("cash_on_delivery");
//   //       setCouponCode("");
//   //       setTotalPriceAfterDiscount(0);
//   //     } else {
//   //       toast("Please add shipping info & payment method");
//   //     }
//   //   } else {
//   //     navigate("/product");
//   //   }
//   // };

//   const handleApplyCoupon = () => {
//     // Dispatch an action to apply the coupon
//     dispatch(couponApply({ coupon: couponCode }));
//     // Clear the input field after applying the coupon
//     setCouponCode("");
//   };

//   useEffect(() => {
//     // Check if couponState is available and if it has the totalAfterDiscount property
//     if (couponState && couponState?.totalAfterDiscount) {
//       // Set totalPriceAfterDiscount to the totalAfterDiscount value from couponState
//       setTotalPriceAfterDiscount(couponState?.totalAfterDiscount + 100);
//     }
//     else if(orderState)
//       {
//         setTotalPriceAfterDiscount(0);
//       }
//     else {
//       // If couponState or totalAfterDiscount is not available, set totalPriceAfterDiscount to totalAmount
//       setTotalPriceAfterDiscount(totalAmount);
//     }
//   }, [couponState, totalAmount]);

//   return (
//     <>
//       <Meta title={"Cart"} />
//       <BreadCrumb title="Cart" />
//       <Container class1="cart-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <div className="col-md-7">
//             <div className="cartCard mb-2">
//               Total Cart Items : {userCartState?.length} <br /> Please provide
//               your shipping address, If you have a Voucher then apply or do
//               nothing, also choose payment method
//             </div>
//             {userCartState &&
//               userCartState?.map((item, index) => {
//                 return (
//                   <div
//                     key={index}
//                     className="cartCard cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
//                   >
//                     <div className="cart-col-1 d-flex align-items-center gap-15">
//                       <div className="w-25">
//                         <img
//                           src={
//                             item?.productId?.images[0].url
//                               ? item?.productId?.images[0].url
//                               : watch
//                           }
//                           className="img-fluid"
//                           alt="watch"
//                         />
//                       </div>
//                       <div className="w-75">
//                         <p>{item?.productId?.title}</p>
//                         <p>Size: JJHHH</p>
//                         <p className="d-flex gap-3">
//                           Color:{" "}
//                           <ul className="colors ps-0">
//                             <li
//                               style={{ backgroundColor: item?.color?.title }}
//                             ></li>
//                           </ul>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="cart-col-3 d-flex align-items-center gap-15">
//                       <div>
//                         <input
//                           className="form-control"
//                           min={1}
//                           max={10}
//                           type="number"
//                           name=""
//                           id=""
//                           value={
//                             productUpdateDetail?.quantity
//                               ? productUpdateDetail?.quantity
//                               : item?.quantity
//                           }
//                           onChange={(e) => {
//                             setProductUpdateDetail({
//                               cartItemId: item?._id,
//                               quantity: e.target.value,
//                             });
//                           }}
//                         />
//                       </div>
//                       <div>
//                         <MdDelete
//                           onClick={() => {
//                             deleteACartProduct(item?._id);
//                           }}
//                           className="text-danger fs-5"
//                         />
//                       </div>
//                     </div>
//                     <div className="cart-col-4">
//                       <h5 className="price">
//                         $ {item?.price * item?.quantity}
//                       </h5>
//                     </div>
//                   </div>
//                 );
//               })}
//             <div className="d-none d-lg-flex justify-content-between cartCard mt-3">
//               {" "}
//               {/* Display only on extra small to medium screens */}
//               <Link to="/product" className="button">
//                 Continue to shopping
//               </Link>
//               <button className="button" onClick={handlePlaceOrder}>
//                 Place Order
//               </button>
//             </div>
//           </div>
//           <div className="col-md-4 ms-md-4">
//             <div className="cartCard">
//               <h4>Shipping Address</h4>
//               <hr />
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <p>
//                   {shippingInfo && shippingInfo ? shippingInfo.city : "Dhaka"}
//                 </p>
//                 <button onClick={handleEditClick} className="btn btn-primary">
//                   <MdModeEditOutline /> Edit
//                 </button>
//               </div>
//               <p>
//                 Name:{" "}
//                 <strong>
//                   {authState && authState
//                     ? authState.firstName + " " + authState.lastName
//                     : ""}
//                 </strong>
//               </p>
//               <p>Phone: {authState && authState ? authState.mobile : ""}</p>
//               <p>
//                 Address:{" "}
//                 {shippingInfo
//                   ? `${shippingInfo.other}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country}, ${shippingInfo.pincode}`
//                   : ""}
//               </p>

//               {/* Modal */}
//               <Modal show={showModal} onHide={handleCloseModal}>
//                 <Modal.Header closeButton>
//                   <Modal.Title>Edit Address</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                   {/* Your form or content for editing */}
//                   <form onSubmit={formik.handleSubmit}>
//                     <div className="mb-3">
//                       <label htmlFor="countryInput" className="form-label">
//                         Country
//                       </label>
//                       <select
//                         name="country"
//                         value={formik.values.country}
//                         onChange={formik.handleChange("country")}
//                         onBlur={formik.handleBlur("country")}
//                         className="form-select"
//                         id="countryInput"
//                       >
//                         <option value="">Select Country</option>
//                         <option value="bangladesh">Bangladesh</option>
//                         <option value="uk">UK</option>
//                         <option value="canada">Canada</option>
//                         <option value="usa">USA</option>
//                         <option value="chaina">Chaina</option>
//                         {/* Add more options for other countries */}
//                       </select>
//                       <div className="error ">
//                         {formik.touched.country && formik.errors.country}
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <div className="mb-3">
//                         <label htmlFor="firstNameInput" className="form-label">
//                           First Name
//                         </label>
//                         <input
//                           name="firstName"
//                           value={formik.values.firstName}
//                           onChange={formik.handleChange("firstName")}
//                           onBlur={formik.handleBlur("firstName")}
//                           placeholder="First Name"
//                           type="text"
//                           className="form-control"
//                           id="firstNameInput"
//                         />
//                         <div className="error">
//                           {formik.touched.firstName && formik.errors.firstName}
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="lastNameInput" className="form-label">
//                           Last Name
//                         </label>
//                         <input
//                           name="lastName"
//                           value={formik.values.lastName}
//                           onChange={formik.handleChange("lastName")}
//                           onBlur={formik.handleBlur("lastName")}
//                           placeholder="Last Name"
//                           type="text"
//                           className="form-control"
//                           id="lastNameInput"
//                         />
//                         <div className="error">
//                           {formik.touched.lastName && formik.errors.lastName}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <div className="mb-3">
//                         <label htmlFor="locationInput1" className="form-label">
//                           Appartment, suite, etc
//                         </label>
//                         <input
//                           name="other"
//                           value={formik.values.other}
//                           onChange={formik.handleChange("other")}
//                           onBlur={formik.handleBlur("other")}
//                           placeholder="Appartment, suite, etc"
//                           type="text"
//                           className="form-control"
//                           id="locationInput1"
//                         />
//                         <div className="error">
//                           {formik.touched.other && formik.errors.other}
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="cityInput" className="form-label">
//                           City
//                         </label>
//                         <input
//                           name="city"
//                           value={formik.values.city}
//                           onChange={formik.handleChange("city")}
//                           onBlur={formik.handleBlur("city")}
//                           placeholder="City"
//                           type="text"
//                           className="form-control"
//                           id="cityInput"
//                         />
//                         <div className="error">
//                           {formik.touched.city && formik.errors.city}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <div>
//                         <label htmlFor="stateInput" className="form-label">
//                           State
//                         </label>
//                         <input
//                           name="state"
//                           value={formik.values.state}
//                           onChange={formik.handleChange("state")}
//                           onBlur={formik.handleBlur("state")}
//                           placeholder="State"
//                           type="text"
//                           className="form-control"
//                           id="stateInput"
//                         />
//                         <div className="error">
//                           {formik.touched.state && formik.errors.state}
//                         </div>
//                       </div>
//                       <div>
//                         <label htmlFor="pincodeInput" className="form-label">
//                           Zip Code
//                         </label>
//                         <input
//                           name="pincode"
//                           value={formik.values.pincode}
//                           onChange={formik.handleChange("pincode")}
//                           onBlur={formik.handleBlur("pincode")}
//                           placeholder="Zip Code"
//                           type="text"
//                           className="form-control"
//                           id="pincodeInput"
//                         />
//                         <div className="error ">
//                           {formik.touched.pincode && formik.errors.pincode}
//                         </div>
//                       </div>
//                     </div>
//                     <hr />
//                     <div className="d-flex justify-content-between">
//                       <Button variant="secondary" onClick={handleCloseModal}>
//                         Close
//                       </Button>
//                       <Button type="submit" variant="primary">
//                         Save Changes
//                       </Button>
//                     </div>
//                   </form>
//                 </Modal.Body>
//               </Modal>
//             </div>
//             <div className="cartCard mt-2">
//               <h4>Checkout Summary</h4>
//               <hr />
//               <p style={{ color: "red", fontWeight: "bold" }}>
//                 Sub Total: {totalAmount && totalAmount ? totalAmount : 0}
//               </p>
//               <p>Shipping: 100 </p>
//               <p style={{ color: "red", fontWeight: "bold" }}>
//                 Total: {totalAmount && totalAmount ? totalAmount + 100 : 0}
//               </p>

//               {couponState && couponState ? (
//                 <p style={{ color: "red", fontWeight: "bold" }}>
//                   Total After Discount: {totalPriceAfterDiscount}
//                 </p>
//               ) : (
//                 ""
//               )}
//               <div>
//                 <label htmlFor="voucherInput" className="form-label">
//                   Apply Voucher or Promo Code:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="voucherInput"
//                   value={couponCode}
//                   onChange={(e) => setCouponCode(e.target.value)}
//                 />
//                 {/* Trigger the handleApplyCoupon function when the Apply button is clicked */}
//                 <button className="button mt-2" onClick={handleApplyCoupon}>
//                   Apply
//                 </button>
//               </div>
//             </div>
//             <div className="mt-2 cartCard">
//               <h4>Choose Payment Method</h4>
//               <hr />
//               <div className="cartCard">
//                 <Form>
//                   <Form.Check
//                     type="radio"
//                     id="custom-radio1"
//                     label="Cash On Delivery"
//                     name="paymentMethod" // Set the name attribute to "paymentMethod" for both Form.Check components
//                     checked={paymentMethod === "cash_on_delivery"} // Check if payment method is cash_on_delivery
//                     onChange={() => setPaymentMethod("cash_on_delivery")} // Set payment method to cash_on_delivery when selected
//                   />
//                   <Form.Check
//                     type="radio"
//                     id="custom-radio2"
//                     label="Bkash"
//                     name="paymentMethod" // Set the name attribute to "paymentMethod" for both Form.Check components
//                     checked={paymentMethod === "bkash"} // Check if payment method is bkash
//                     onChange={() => setPaymentMethod("bkash")} // Set payment method to bkash when selected
//                   />
//                 </Form>
//               </div>
//             </div>
//           </div>
//           {/* Buttons for Continue shopping and Place Order */}
//           <div className="d-md-none">
//             {" "}
//             {/* Display only on extra small to medium screens */}
//             <div className="d-flex justify-content-between cartCard mt-3">
//               <Link to="/product" className="button">
//                 Continue to shopping
//               </Link>
//               <button className="button" onClick={handlePlaceOrder}>
//                 Place Order
//               </button>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Modal show={confirmOrder} onHide={() => setConfirmOrder(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Order</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to place this order?</Modal.Body>
//         <Modal.Footer className="d-flex justify-content-center">
//           <Button variant="secondary" onClick={() => setConfirmOrder(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={confirmOrderAndDispatch}>
//             Confirm
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default CartPage;

import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import cartImage from "../images/cartImage.png";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import {
  couponApply,
  createAnOrder,
  deleteCartProduct,
  deleteUserCart,
  getUserCart,
  updateCartProduct,
  RESET_COUPON_STATE, // Import the reset action
} from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const shippingSchema = yup.object({
  firstName: yup.string().required("FirstName is required"),
  lastName: yup.string().required("LastName is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  other: yup.string().required("Others are required"),
  pincode: yup.string().required("PinCode is required"),
});

function CartPage() {
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");
  const [showModal, setShowModal] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth?.user);
  const couponState = useSelector((state) => state?.auth?.couponApplied);
  const orderState = useSelector((state) => state?.auth?.orderProduct);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values, { resetForm }) => {
      setShippingInfo(values);
      setShowModal(false);
      resetForm();
    },
  });

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTotalPriceAfterDiscount(0);
      setTimeout(() => {
        dispatch(getUserCart());
        setTotalPriceAfterDiscount(0);
      }, 300);
    }
  }, [dispatch, productUpdateDetail]);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum +=
        Number(userCartState[index].quantity) *
        Number(userCartState[index].price);
      setTotalAmount(sum + 100);
    }
  }, [userCartState]);

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTotalPriceAfterDiscount(0);
    setTotalAmount(0);
    setTimeout(() => {
      dispatch(getUserCart());
      setTotalPriceAfterDiscount(0);
    }, 200);
  };

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePlaceOrder = () => {
    setConfirmOrder(true);
  };

  const confirmOrderAndDispatch = () => {
    if (userCartState?.length > 0) {
      if (shippingInfo && paymentMethod) {
        dispatch(
          createAnOrder({
            shippingInfo: shippingInfo,
            orderItems: userCartState.map((item) => ({
              product: item?.productId?._id,
              color: item?.color?._id,
              quantity: item?.quantity,
              price: item?.price,
            })),
            totalPrice: totalAmount,
            totalPriceAfterDiscount: totalPriceAfterDiscount,
            paymentInfo: { method: paymentMethod },
          })
        ).then((result) => {
          if (createAnOrder.fulfilled.match(result)) {
            setConfirmOrder(false);
            dispatch(deleteUserCart());
            navigate("/confirm-order");
            setShippingInfo(null);
            setTotalAmount(0);
            setPaymentMethod("cash_on_delivery");
            setCouponCode("");
            setTotalPriceAfterDiscount(0);
          }
        }).catch((error) => {
          // Optional: Handle any additional errors that might not be covered by the rejected case
          toast(error.message || "Order creation failed");
        });
      } else {
        toast("Please add shipping info & payment method");
      }
    } else {
      navigate("/product");
    }
  };
  

  // const confirmOrderAndDispatch = () => {
  //   if (userCartState?.length > 0) {
  //     if (shippingInfo) {
  //       dispatch(
  //         createAnOrder({
  //           shippingInfo: shippingInfo,
  //           orderItems: userCartState?.map((item) => ({
  //             product: item?.productId?._id,
  //             color: item?.color?._id,
  //             quantity: item?.quantity,
  //             price: item?.price,
  //           })),
  //           totalPrice: totalAmount,
  //           totalPriceAfterDiscount: totalPriceAfterDiscount,
  //           paymentInfo: { method: paymentMethod },
  //         })
  //       ).then(() => {
  //         setConfirmOrder(false);
  //         dispatch(deleteUserCart());
  //         navigate("/confirm-order");
  //         setShippingInfo(null);
  //         setTotalAmount(0);
  //         setPaymentMethod("cash_on_delivery");
  //         setCouponCode("");
  //         setTotalPriceAfterDiscount(0);
  //       }).catch((error) => {
  //         // Handle any additional errors that might not be covered by the rejected case
  //         toast("Order creation failed");
  //       });
  //     } else {
  //       toast("Please add shipping info & payment method");
  //     }
  //   } else {
  //     navigate("/product");
  //   }
  // };

  const handleApplyCoupon = () => {
    dispatch(couponApply({ coupon: couponCode }));
    setCouponCode("");
  };

  useEffect(() => {
    if (couponState && couponState?.totalAfterDiscount) {
      setTotalPriceAfterDiscount(couponState?.totalAfterDiscount + 100);
    } else if (orderState) {
      setTotalPriceAfterDiscount(0);
    } else {
      setTotalPriceAfterDiscount(totalAmount);
    }
  }, [couponState, totalAmount]);

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-md-7">
            <div className="cartCard mb-2">
              Total Cart Items : {userCartState?.length} <br /> Please provide
              your shipping address, If you have a Voucher then apply or do
              nothing, also choose payment method
            </div>
            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cartCard cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-1 d-flex align-items-center gap-15">
                      <div className="w-25">
                        <img
                          src={
                            item?.productId?.images[0]?.url
                              ? item?.productId?.images[0]?.url
                              : cartImage
                          }
                          className="img-fluid"
                          alt="watch"
                        />
                      </div>
                      <div className="w-75">
                        <p>{item?.productId?.title}</p>
                        <p>Price: {item?.price} BDT</p>
                        <p className="d-flex gap-3">
                          Color:{" "}
                          <ul className="colors ps-0">
                            <li
                              style={{ backgroundColor: item?.color?.title }}
                            ></li>
                          </ul>
                        </p>
                      </div>
                    </div>

                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          min={1}
                          max={10}
                          type="number"
                          name=""
                          id=""
                          value={
                            productUpdateDetail?.quantity
                              ? productUpdateDetail?.quantity
                              : item?.quantity
                          }
                          onChange={(e) => {
                            setProductUpdateDetail({
                              cartItemId: item?._id,
                              quantity: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <MdDelete
                          onClick={() => {
                            deleteACartProduct(item?._id);
                          }}
                          className="text-danger fs-5"
                        />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                        {item?.price * item?.quantity} BDT
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-md-5">
            <div className="cartCard">
              <h4>Shipping Address</h4>
              <hr />
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p>
                  {shippingInfo && shippingInfo ? shippingInfo.city : "Dhaka"}
                </p>
                <button onClick={handleEditClick} className="btn btn-primary">
                  <MdModeEditOutline /> Edit
                </button>
              </div>
              <p>
                Name:{" "}
                <strong>
                  {authState && authState
                    ? authState.firstName + " " + authState.lastName
                    : ""}
                </strong>
              </p>
              <p>Phone: {authState && authState ? authState.mobile : ""}</p>
              <p>
                Address:{" "}
                {shippingInfo
                  ? `${shippingInfo.other}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country}, ${shippingInfo.pincode}`
                  : ""}
              </p>
            </div>
            <div className="border-bottom py-4">
              <h4>Voucher</h4>
              <p className="mb-0">
                If you have a Voucher, please enter it and click Apply.
              </p>
              <div className="d-flex gap-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Voucher Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleApplyCoupon}
                >
                  Apply
                </Button>
              </div>
            </div>
            <div className="border-bottom py-4">
            <h4>Payment Method</h4>
      <div className="d-flex gap-10">
        <Form.Check
          type="radio"
          label="Cash on Delivery"
          name="paymentMethod"
          id="cashOnDelivery"
          checked={paymentMethod === "cash_on_delivery"}
          onChange={(e) => setPaymentMethod("cash_on_delivery")}
        />
        <Form.Check
          type="radio"
          label="Online Payment"
          name="paymentMethod"
          id="onlinePayment"
          checked={paymentMethod === "online_payment"}
          onChange={(e) => setPaymentMethod("online_payment")}
        />
      </div>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between mt-3">
              <h5>Shipping Charge :</h5>
              <h5 className="total-price">100 BDT</h5>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between ">
              <h5>Total Amount :</h5>
              <h5 className="total-price">{totalAmount} BDT</h5>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <h5>Total Amount After Discount :</h5>
              <h5 className="total-price">
                {totalPriceAfterDiscount
                  ? totalPriceAfterDiscount
                  : totalAmount}{" "}
                BDT
              </h5>
            </div>
            <Button
              variant="primary"
              className="btn btn-lg mt-3 w-100"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
            {confirmOrder && (
              <div className="mt-3">
                <Button
                  variant="success"
                  className="btn btn-lg w-100"
                  onClick={confirmOrderAndDispatch}
                >
                  Confirm Order
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your form or content for editing */}
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="countryInput" className="form-label">
                Country
              </label>
              <select
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange("country")}
                onBlur={formik.handleBlur("country")}
                className="form-select"
                id="countryInput"
              >
                <option value="">Select Country</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="chaina">Chaina</option>
                {/* Add more options for other countries */}
              </select>
              <div className="error ">
                {formik.touched.country && formik.errors.country}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="mb-3">
                <label htmlFor="firstNameInput" className="form-label">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                  placeholder="First Name"
                  type="text"
                  className="form-control"
                  id="firstNameInput"
                />
                <div className="error">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="lastNameInput" className="form-label">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                  placeholder="Last Name"
                  type="text"
                  className="form-control"
                  id="lastNameInput"
                />
                <div className="error">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="mb-3">
                <label htmlFor="locationInput1" className="form-label">
                  Appartment, suite, etc
                </label>
                <input
                  name="other"
                  value={formik.values.other}
                  onChange={formik.handleChange("other")}
                  onBlur={formik.handleBlur("other")}
                  placeholder="Appartment, suite, etc"
                  type="text"
                  className="form-control"
                  id="locationInput1"
                />
                <div className="error">
                  {formik.touched.other && formik.errors.other}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="cityInput" className="form-label">
                  City
                </label>
                <input
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange("city")}
                  onBlur={formik.handleBlur("city")}
                  placeholder="City"
                  type="text"
                  className="form-control"
                  id="cityInput"
                />
                <div className="error">
                  {formik.touched.city && formik.errors.city}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <label htmlFor="stateInput" className="form-label">
                  State
                </label>
                <input
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange("state")}
                  onBlur={formik.handleBlur("state")}
                  placeholder="State"
                  type="text"
                  className="form-control"
                  id="stateInput"
                />
                <div className="error">
                  {formik.touched.state && formik.errors.state}
                </div>
              </div>
              <div>
                <label htmlFor="pincodeInput" className="form-label">
                  Zip Code
                </label>
                <input
                  name="pincode"
                  value={formik.values.pincode}
                  onChange={formik.handleChange("pincode")}
                  onBlur={formik.handleBlur("pincode")}
                  placeholder="Zip Code"
                  type="text"
                  className="form-control"
                  id="pincodeInput"
                />
                <div className="error ">
                  {formik.touched.pincode && formik.errors.pincode}
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartPage;
