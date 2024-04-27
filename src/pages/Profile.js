import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import * as yup from "yup";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

const profileSchema = yup.object({
    firstName: yup
      .string()
      .required("First Name is required"),
      lastName: yup
      .string()
      .required("Last Name is required"),
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email address is required"),
    mobile: yup.string().required("Mobile is required"),
  });

function Profile() {
    const dispatch= useDispatch();
    const userState = useSelector((state)=> state?.auth?.user);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          firstName: userState?.firstName,
          lastName: userState?.lastName,
          email: userState?.email,
          mobile: userState?.mobile
        },
        validationSchema: profileSchema,
        onSubmit: (values) => {
          
           
        }
      });
  return (
    <>
      <BreadCrumb title='My Profile'/>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className='row'>
            <div className='col-12'>
            <form onSubmit={formik.handleSubmit}> 
            <div className="mb-3">
    <label htmlFor="example1" className="form-label">First Name</label>
    <input type="text" name='firstName' className="form-control" id="example1" 
    value={formik.values.firstName}
    onChange={formik.handleChange('firstName')}
    onBlur={formik.handleBlur('firstName')}/>
    <div className='error'>
        {formik.touched.firstName && formik.errors.firstName}
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="example2" className="form-label">Last Name</label>
    <input type="text" name='lastName' className="form-control" id="example2"
    value={formik.values.lastName}
    onChange={formik.handleChange('lastName')}
    onBlur={formik.handleBlur('lastName')}/>
    <div className='error'>
        {formik.touched.lastName && formik.errors.lastName}
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     value={formik.values.email}
     onChange={formik.handleChange('email')}
     onBlur={formik.handleBlur('email')}/>
      <div className='error'>
        {formik.touched.email && formik.errors.email}
    </div>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail2" className="form-label">Mobile</label>
    <input type="text" name='mobile' className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"
     value={formik.values.mobile}
     onChange={formik.handleChange('mobile')}
     onBlur={formik.handleBlur('mobile')}/>
      <div className='error'>
        {formik.touched.mobile && formik.errors.mobile}
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary">Save</button>
</form>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Profile
