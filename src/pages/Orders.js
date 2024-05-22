import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

function Orders() {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getOrderedProduct?.orders
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <>
      <BreadCrumb title="My Orders" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cartCard mb-4">
              <h4>Total Order Items : {orderState?.length}</h4>
            </div>
            <div className="row">
              <div className="col-3 d-none d-md-block">
                <h5 className="font-size-sm">Order Id</h5>
              </div>
              <div className="col-3">
                <h5 className="font-size-sm">Total Amount</h5>
              </div>
              <div className="col-3">
                <h5 className="font-size-sm">Total Amount After Discount</h5>
              </div>
              <div className="col-3">
                <h5 className="font-size-sm">Status</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div
                    style={{ backgroundColor: "#febd69" }}
                    className="row pt-3 my-3"
                    key={index}
                  >
                    <div className="col-3 d-none d-md-block">
                      <p>{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPrice} BDT</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPriceAfterDiscount} BDT</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.orderStatus}</p>
                    </div>
                    <div className="col-12">
                      <div
                        className="row py-3"
                        style={{ backgroundColor: "#232f3e" }}
                      >
                        <div className="col-3">
                          <h6 className="text-white">Product Name</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Quantity</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Price</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Color</h6>
                        </div>
                        {item?.orderItems?.map((i, index) => {
                          return (
                            <div className="col-12">
                              <div className="row p-3">
                                <div className="col-3">
                                  <p className="text-white">{`${index + 1}. ${
                                    i.product.title
                                  }`}</p>
                                </div>
                                <div className="col-3">
                                  <p className="text-white">{i?.quantity}</p>
                                </div>
                                <div className="col-3">
                                  <p className="text-white">{i?.price} BDT</p>
                                </div>
                                <div className="col-3">
                                  <ul className="colors ps-0">
                                    <li
                                      style={{
                                        backgroundColor: i?.color?.title,
                                      }}
                                    ></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Orders;
