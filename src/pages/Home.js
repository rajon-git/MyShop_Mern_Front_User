import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <section className='home-wrapper-1 py-5'>
       <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner'/>
            <div className='main-banner-content position-absolute'>
              <h4>Super chraged for pros</h4>
              <h5>ipad s13+ pro</h5>
              <p>From $999.0o or $41.62/mo.</p>
              <Link className='button'>Buy now</Link>
            </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
            <div className='small-banner position-relative'>
              <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner'/>
            <div className='small-banner-content position-absolute'>
              <h4>Best</h4>
              <h5>ipad s13+ pro</h5>
              <p>From $999.0o <br/> or $41.62/mo.</p>
            </div>
            </div>
            <div className='small-banner position-relative'>
              <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner'/>
            <div className='small-banner-content position-absolute'>
              <h4>New Arraival</h4>
              <h5>ipad air</h5>
              <p>From $999.0o <br/> or $41.62/mo.</p>
            </div>
            </div>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner'/>
            <div className='small-banner-content position-absolute'>
              <h4>New Arraival</h4>
              <h5>ipad air</h5>
              <p>From $999.0o <br/> or $41.62/mo.</p>
            </div>
            </div>

            <div className='small-banner position-relative '>
              <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner'/>
            <div className='small-banner-content position-absolute'>
              <h4>New Arraival</h4>
              <h5>ipad air</h5>
              <p>From $999.0o <br/> or $41.62/mo.</p>
            </div>
            </div>
            </div>
          </div>
        </div>
       </div>
     </section>

     <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-15'>
                 <img src='images/service.png' alt='services'/>
                 <div>
                 <h6>Free Shipping</h6>
                 <p className='mb-0'>From all orders over $100</p>
                 </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                 <img src='images/service-02.png' alt='services'/>
                 <div>
                 <h6>Daily Surprize Offer</h6>
                 <p className='mb-0'>Save upto 25%</p>
                 </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                 <img src='images/service-03.png' alt='services'/>
                 <div>
                 <h6>Support 24/7</h6>
                 <p className='mb-0'>Shop with an expert</p>
                 </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                 <img src='images/service-04.png' alt='services'/>
                <div>
                <h6>Affordable Prices</h6>
                 <p className='mb-0'>Get Factory Default Proces</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                 <img src='images/service-05.png' alt='services'/>
                 <div>
                 <h6>Secure Payments</h6>
                 <p className='mb-0'>100% Proteced Payments</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'/>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/tv.jpg' alt='camera'/>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'/>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'/>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'/>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/tv.jpg' alt='camera'/>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'/>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'/>
              </div>

            </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Home