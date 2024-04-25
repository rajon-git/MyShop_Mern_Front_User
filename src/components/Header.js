import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const [total,setTotal] = useState(null);
  const userCartState = useSelector((state) => state?.auth?.cartProducts ?? []);

 useEffect(() => {
  let sum = 0;
  if (userCartState) { // Check if userCartState is defined
    for (let index = 0; index < userCartState?.length; index++) {
      sum = sum + (Number(userCartState[index].quantity) * Number(userCartState[index].price));
      setTotal(sum);
    }
  }
  else {
    setTotal(0); 
  }
}, [userCartState]);

  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over $100 and Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white  mb-0'>
                Hotline: <a className='text-white' href='01990020467'>01990020467</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Developers</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <IoIosSearch className='fs-6 search-icon' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/compare.svg' alt='compare' />
                    <p className='mb-0'>Compare</p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'>Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/user.svg' alt='user' />
                    <p className='mb-0'>Login</p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-lg-2 col-md-3 col-6'>
              <h2>
                <Link className='text-white'>Developers</Link>
              </h2>
            </div>
            <div className='col-lg-5 col-md-6 col-6 mt-3 mt-md-0'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <IoIosSearch className='fs-6 search-icon' />
                </span>
              </div>
            </div>
            <div className='col-lg-5 col-md-3 col-12 mt-3 mt-md-0'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/compare.svg' alt='compare' />
                    <p className='mb-0'>Compare</p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'>Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/user.svg' alt='user' />
                    <p className='mb-0'>Login</p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>{userCartState && userCartState?.length ? userCartState?.length : 0}</span>
                      <p className='mb-0'>$ {total && total ? total : 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-lg-30 gap-10'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-lg-15 gap-25 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='images/menu.svg' alt='' />
                      <span className='me-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header