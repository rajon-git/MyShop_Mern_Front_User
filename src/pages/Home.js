import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <section className='home-wrapper-1 py-5'>
       <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative p-3'>
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
    </>
  )
}

export default Home