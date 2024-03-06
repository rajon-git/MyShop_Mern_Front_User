import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
   
      <div className='blog-card'>
        <div className='card-image'>
            <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'/>
        </div>
        <div className='blog-content'>
            <p className='date'>
                3 March, 2024
            </p>
            <h5 className='title'>
                A beautiful Friday Morning Renaissance
            </h5>
            <p className='desc'>
            It is a long established fact that a reader 
            will be distracted by the readable  
            </p>
            <Link to="/" className='button'>Read More</Link>
        </div>
      </div>
   
  )
}

export default BlogCard
