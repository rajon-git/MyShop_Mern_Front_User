import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';

function Contact() {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title='Contact Us' />
      <div className='contact-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.255379349424!2d90.3648412!3d23.798540949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d985b902f7%3A0x74e8dcb8d8a94349!2sMirpur%202!5e0!3m2!1sen!2sbd!4v1709746113174!5m2!1sen!2sbd" 
               width="600" 
               height="450" 
               className='border-0 w-100'
               allowfullscreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade">

               </iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact