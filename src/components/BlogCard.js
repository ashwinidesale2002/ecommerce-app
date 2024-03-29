import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
               <img src='img/images/blog-1.jpg'className='img-fluid' alt=''/>
            </div>
            <div className='blog-content'>
               <p className='date'>8 sap 2023</p>
               <h5 className='title'>A beautiful sunday morning renaissance</h5>
               <p className='desc'>
                Lorem ipsum dolor sit amet consectetyr adipisicing elit.atque
                quaerat accusamus oficia
               </p>
               <Link to="/" className='button'>
                Read More
               </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard