import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';

function TermsandCondition() {
  return (
    <>
      <Meta title={"Terms and Condition"} />
      <BreadCrumb title="Terms and Condition" />
      <Container class1='policy-wrapper home-wrapper-2 py-5'>
       
          <div className='row'>
            <div className='col-12'>
              <div className='policy'></div>
            </div>
          </div>
        
      </Container>
    </>
  )
}

export default TermsandCondition
