import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import watch from "../images/watch.jpg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartProduct, getUserCart, updateCartProduct } from "../features/user/userSlice";

function Cart() {
  const [productUpdateDetail,setProductUpdateDetail] = useState(null);
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.auth?.cartProducts);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(()=>{
    if(productUpdateDetail !== null)
    {
      dispatch(updateCartProduct({cartItemId:productUpdateDetail?.cartItemId,quantity:productUpdateDetail?.quantity}));
    setTimeout(()=>{
      dispatch(getUserCart())
    },200);
    }
  },[productUpdateDetail])

  const deleteACartProduct= (id)=>{
    dispatch(deleteCartProduct(id));
    setTimeout(()=>{
      dispatch(getUserCart())
    },200);
  }

  const updateACartProduct= (productUpdateDetail)=>{
    
  }
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-1 d-flex align-items-center gap-15">
                      <div className="w-25">
                        <img src={item?.productId?.images[0].url ? item?.productId?.images[0].url : watch} className="img-fluid" alt="watch" />
                      </div>
                      <div className="w-75">
                        <p>{item?.productId?.title}</p>
                        <p>Size: JJHHH</p>
                        <p className="d-flex gap-3">
                          Color:{" "}
                          <ul className="colors ps-0">
                            <li style={{ backgroundColor: item?.color?.title }}></li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">$ {item?.price}</h5>
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
                          value={productUpdateDetail?.quantity ? productUpdateDetail?.quantity : item?.quantity}
                          onChange={(e)=>{setProductUpdateDetail({cartItemId:item?._id,quantity:e.target.value})}}
                        />
                      </div>
                      <div>
                        <MdDelete onClick={()=>{deleteACartProduct(item?._id)}} className="text-danger fs-5" />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">$ {item?.price * item?.quantity}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue to shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ 270</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;
