import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function SpecialProduct(props) {
    const {id,title, brand,image, totalrating, price, sold, quantity} = props;
    return (
        <div className='col-6 mb-3'>
            <div className='special-product-card'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img style={{width:300, height:300}} src={image ? image : 'images/watch.jpg'} alt={image ? image.name : 'watch'} className='img-fluid' />
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>{brand}</h5>
                        <h6 className='title'>
                            {title}
                        </h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value={totalrating}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className='price'>
                            <span className='red-p'>
                                {price}
                            </span> &nbsp;
                            <strike>$200</strike>
                        </p>
                        <div className='discout-till d-flex align-items-center gap-10'>
                            <p className='mb-0'>
                                <b>5 </b>Days
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>1</span>
                            </div>
                            
                        </div>
                        <div className='product-count my-3'>
                                <p>Products: {quantity}</p>
                                <div className="progress">
                                    <div className="progress-bar" 
                                         role="progressbar" 
                                         style={{width: quantity / quantity + sold *100 + "%" }}
                                         aria-valuenow={quantity / quantity + sold *100} 
                                         aria-valuemin={quantity} 
                                         aria-valuemax={sold+quantity}>
                                    </div>
                                </div>
                            </div>

                            <Link className='button' to={'/product/'+id}>view</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct