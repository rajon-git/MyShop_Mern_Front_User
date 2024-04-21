import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Container from '../components/Container';
import { useFormik } from 'formik';
import * as yup from "yup"
import { useDispatch } from 'react-redux';
import { createQuery } from '../features/contact/contactSlice';

const contactShema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().nullable().email("Email should be valid").required("Email is required"),
  mobile: yup.string().default('').nullable().required("Mobile Number is required"),
  comment: yup.string().default('').nullable().required("Comment is required"),
});

function Contact() {
  const disptach = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      comment: '',
    },
    validationSchema:contactShema,
    onSubmit: values => {
      disptach(createQuery({
        name:values.name,
        email:values.email,
        mobile: values.mobile,
        comment: values.comment
      }));
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title='Contact Us' />
      <Container class1='contact-wrapper home-wrapper-2 py-5'>

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
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact Us</h3>
                <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type="text"
                      className='form-control'
                      placeholder='Name'
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className='error'>
                      {
                        formik.touched.name && formik.errors.name
                      }
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className='form-control'
                      placeholder='Email'
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                    <div className='error'>
                      {
                        formik.touched.email && formik.errors.email
                      }
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      className='form-control'
                      placeholder='Mobile Number'
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                    <div className='error'>
                      {
                        formik.touched.mobile && formik.errors.mobile
                      }
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="comment"
                      id=''
                      className='w-100 form-control'
                      cols='30'
                      rows='4'
                      placeholder='Comment'
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    ></textarea>
                    <div className='error'>
                      {
                        formik.touched.comment && formik.errors.comment
                      }
                    </div>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <IoHomeOutline className='fs-5' />
                      <address className='mb-0'>hno: Mirpur-2, Dhaka-1216, pincode:1190282</address>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <IoCallOutline className='fs-5' />
                      <a href='tel:01990020467'>01990020467</a>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <CiMail className='fs-5' />
                      <a href='mailto:rajon.zhsust15@gmail.com'>rajon.zhsust15@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <IoIosInformationCircleOutline className='fs-5' />
                      <p className='mb-0'>Saturday-Thursday 10am-8pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact