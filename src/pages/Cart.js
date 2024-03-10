import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import watch from "../images/watch.jpg"
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
        <Meta title={"Cart"} />
        <BreadCrumb title='Cart' />
        <div className='cart-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                      <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                      </div>
                      <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 d-flex align-items-center gap-15'>
                            <div className='w-25'>
                                <img src={watch} className='img-fluid' alt='watch'/>
                            </div>
                            <div className='w-75'>
                                <p>GhhG</p>
                                <p>Size: JJHHH</p>
                                <p>Color: S</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$ 100</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input className='form-control' min={1} max={10} type='number' name='' id=''/>
                            </div>
                            <div>
                                <MdDelete className='text-danger fs-5'/>
                            </div>
                        </div>
                        <div className='cart-col-4'>
                           <h5 className='price'>$ 100</h5>
                        </div>
                      </div>
                      <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 d-flex align-items-center gap-15'>
                            <div className='w-25'>
                                <img src={watch} className='img-fluid' alt='watch'/>
                            </div>
                            <div className='w-75'>
                                <p>GhhG</p>
                                <p>Size: JJHHH</p>
                                <p>Color: S</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$ 100</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input className='form-control' min={1} max={10} type='number' name='' id=''/>
                            </div>
                            <div>
                                <MdDelete className='text-danger fs-5'/>
                            </div>
                        </div>
                        <div className='cart-col-4'>
                           <h5 className='price'>$ 100</h5>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 py-2 mt-4'>
                       <div className='d-flex justify-content-between align-items-baseline'>
                       <Link to='/product' className='button'>Continue to shopping</Link>
                       <div className='d-flex flex-column align-items-end'>
                         <h4>SubTotal: $ 270</h4>
                         <p>Taxes and shipping calculated at checkout</p>
                         <Link to='/checkout' className='button'>Checkout</Link>
                       </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart