import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

function ProductCard(props) {
    const {grid} = props;
    let location = useLocation();
    return (
        <>
         <div className={`${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                       <img src='images/wish.svg' alt='wishlist'/>
                    </Link>
                </div>
                <div className='product-image'>
                    <img src='images/watch.jpg' alt='product image' className='img-fluid'/>
                    <img src='images/tab1.jpg' alt='product image' className='img-fluid'/>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                        Kids Headphone Bult 10 pack multi colored studesnt
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>
                        Get started with Bootstrap, the world's most popular 
                        framework for building responsive, mobile-first sites, 
                        with jsDelivr and a template starter page.
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                          <img src='images/prodcompare.svg' alt='prodcompare'/>
                        </Link>
                        <Link>
                          <img src='images/view.svg' alt='view'/>
                        </Link>
                        <Link>
                          <img src='images/add-cart.svg' alt='add-cart'/>
                        </Link>
                        
                    </div>
                </div>
            </Link>
        </div>
        <div className={`${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                       <img src='images/wish.svg' alt='wishlist'/>
                    </Link>
                </div>
                <div className='product-image'>
                    <img src='images/watch.jpg' alt='product image' className='img-fluid'/>
                    <img src='images/tab1.jpg' alt='product image' className='img-fluid'/>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                        Kids Headphone Bult 10 pack multi colored studesnt
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>
                        Get started with Bootstrap, the world's most popular 
                        framework for building responsive, mobile-first sites, 
                        with jsDelivr and a template starter page.
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                          <img src='images/prodcompare.svg' alt='prodcompare'/>
                        </Link>
                        <Link>
                          <img src='images/view.svg' alt='view'/>
                        </Link>
                        <Link>
                          <img src='images/add-cart.svg' alt='add-cart'/>
                        </Link>
                        
                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}

export default ProductCard