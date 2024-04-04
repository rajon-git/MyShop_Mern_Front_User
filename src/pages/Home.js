import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from "../utils/Data";

function Home() {
  return (
    <>
      {/* <Container class1='home-wrapper-1 py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
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
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Best</h4>
                  <h5>ipad s13+ pro</h5>
                  <p>From $999.0o <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arraival</h4>
                  <h5>ipad air</h5>
                  <p>From $999.0o <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arraival</h4>
                  <h5>ipad air</h5>
                  <p>From $999.0o <br /> or $41.62/mo.</p>
                </div>
              </div>

              <div className='small-banner position-relative '>
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arraival</h4>
                  <h5>ipad air</h5>
                  <p>From $999.0o <br /> or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      <Container className='home-wrapper-1 py-5'>
        <div className='row'>
          <div className='col-lg-6 mt-4 mb-0 mb-lg-4'>
            <div className='main-banner position-relative'>
              <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h4>Super chraged for pros</h4>
                <h5>ipad s13+ pro</h5>
                <p>From $999.0o or $41.62/mo.</p>
                <Link className='button'>Buy now</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mt-4 mb-4 mb-lg-4'>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Best</h4>
                  <h5>ipad s13+ pro</h5>
                  <p>From $999.0o <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>ipad air</h5>
                  <p>From $999.0o <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>ipad air</h5>
                  <p>From $999.0o <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>ipad air</h5>
                  <p>From $999.0o <br /> or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>


      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt='services' />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/tv.jpg' alt='camera' />
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera' />
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera' />
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/tv.jpg' alt='camera' />
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera' />
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera' />
              </div>

            </div>
          </div>
        </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Featured Collection
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1='famous-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-01.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-02.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of brightness</h6>
                <p className='text-dark'>27 inch 5k retina Display</p>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-03.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Smart Phone</h5>
                <h6 className='text-dark'>Smartphone 13 pro</h6>
                <p className='text-dark'>Now in purple. From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-04.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Home Speakers</h5>
                <h6 className='text-dark'>Room Filling Sound</h6>
                <p className='text-dark'>Now in purple. From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>


      <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Special Products
            </h3>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </Container>

      <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Our popular products
            </h3>
          </div>

        </div>
        <div className='row'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1='marque-wrapper py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marque-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Our latest blogs
            </h3>
          </div>

        </div>
        <div className='row'>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home