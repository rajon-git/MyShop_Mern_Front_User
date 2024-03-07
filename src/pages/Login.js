import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';

function Login() {
  return (
    <>
     <Meta title={"Login"} />
      <BreadCrumb title='Login' />
      <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-12'>
                <div className='login-card'>
                    <h3>Login</h3>
                    <form action=''></form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login