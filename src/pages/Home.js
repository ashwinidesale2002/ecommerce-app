import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>

    <div className="container-xxl">
         <div className="row">
            <div className="col-6">
              <div className='main-banner position-relative '>
                <img src='img/images/main-banner-1.jpg'
                className='img-fluid rounded-3'
                alt='main banner'/>

                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $66.00 or $32.65/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
              <div className='small-banner gap-10 position-relative p-3'>
                <img src='img/images/catbanner-01.jpg'
                className='img-fluid rounded-3'
                alt='mai banner'/>

                <div className='small-banner-content position-absolute'>
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $66.00 <br/> or $32.65/mo.</p>
                </div>
              </div>
               <div className='small-banner position-relative p-3'>
                <img src='img/images/catbanner-02.jpg'
                className='img-fluid rounded-3'
                alt='mai banner'/>

                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>From $66.00 <br/> or $32.65/mo.</p>
                </div>
              </div>
               <div className='small-banner position-relative p-3'>
                <img src='img/images/catbanner-03.jpg'
                className='img-fluid rounded-3'
                alt='mai banner'/>

                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $66.00 <br/> or $32.65/mo.</p>
                </div>
              </div>
               <div className='small-banner position-relative p-3'>
                <img src='img/images/catbanner-04.jpg'
                className='img-fluid rounded-3'
                alt='mai banner'/>

                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $66.00 <br/> or $32.65/mo.</p>
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
            <div className=' services d-flex align-items-center justify-content-between '>
              <div className='d-flex align-items-center gap-15'>
               <img src='img/images/service.png'alt='services'/>
               <div>
               <h6> Free Shipping</h6>
               <p className='mb-0'> From all orders over $5</p>
               </div>
               </div>
               <div className='d-flex align-items-center gap-15'>
               <img src='img/images/service-02.png'alt='services'/>
               <div>
               <h6>Daily Surprise Offers</h6>
               <p className='mb-0'>savee upto 25% off </p>
               </div>
               </div>
               <div className='d-flex align-items-center gap-15'>
               <img src='img/images/service-03.png'alt='services'/>
               <div>
               <h6>Support 24/7</h6>
               <p className='mb-0'>Shop with an expert</p>
               </div>
               </div>
               <div className='d-flex align-items-center gap-15'>
               <img src='img/images/service-04.png'alt='services'/>
               <div>
               <h6>Affordable Prices</h6>
               <p className='mb-0'>Get Factory default Price</p>
               </div>
               </div>
               <div className='d-flex align-items-center gap-15'>
               <img src='img/images/service-05.png'alt='services'/>
               <div>
               <h6>Secure Payments</h6>
               <p mb-0>100% Protected Payment</p>
               </div>
               </div>
            </div>
            </div>
          </div>
       </div>
    </section>
    <section className=' home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex  flex-wrap justify-content-betweeen align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6 >Cameras </h6>
                <p> 10 items </p>
              </div>
                <img src='img/images/camera.jpg'alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6 >Cameras </h6>
                <p> 10 items </p>
              </div>
                <img src='img/images/camera.jpg'alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6 >Smart TV </h6>
                <p> 10 items </p>
              </div>
                <img src='img/images/tv.jpg'alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6 >HeadPhones </h6>
                <p> 10 items </p>
              </div>
                <img src='img/images/headphone.jpg'alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6 >Cameras </h6>
                <p> 10 items </p>
              </div>
                <img src='img/images/camera.jpg'alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6 >Cameras </h6>
                <p> 10 items </p>
              </div>
                <img src='img/images/camera.jpg'alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6 >Smart TV </h6>
                <p> 10 items </p>
              </div>
                <img src='img/images/tv.jpg'alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6 >HeadPhones </h6>
                <p> 10 items </p>
              </div>
                <img src='img/images/headphone.jpg'alt='camera'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
    <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4 '>
            <div className='famous-card position-relative'>
            <img  src='img/images/ff3.png' alt=''/>
              <div className='famous-content position-absolute'>
              <h5>Big Screen</h5>
              <h6>Smart Watch Series</h6>
              <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className='col-4 '>
            <div className='famous-card  position-relative'>
            <img  src='img/images/famous.jpg' style={{height:510}}  alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 style={{color:'black'}}>SMART PHONES</h5>
              <h6 style={{color:'black'}}>Smartphone 13 Pro</h6>
              <p style={{color:'black'}}>Now in Green $999,00 or $41.62/mo.for24,Footnote</p>
              </div>
            </div>
          </div>
          <div className='col-4 '>
            <div className='famous-card  position-relative'>
            <img  src='img/images/ff2.jpg' style={{height:510}}  alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 style={{color:'black'}}>HOME SPEAKERS</h5>
              <h6 style={{color:'black'}}>Room-filling sound</h6>
              <p style={{color:'black'}}> From $699 or $116.58/mo,for 12 mo*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
      <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          
        </div>
        </div>
    </section>
    <section className='popular-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
    <section className='marque-wrapper home wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
           <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='img/images/brand-01.png'alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='img/images/brand-02.png'alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='img/images/brand-03.png'alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='img/images/brand-04.png'alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='img/images/brand-05.png'alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='img/images/brand-06.png'alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='img/images/brand-07.png'alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='img/images/brand-08.png'alt='brand'/>
                </div>
                  
            </Marquee>
            </div>
           </div>
        </div>
      </div>
    </section>
    
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>

      </div>

    </section>
  
    
    </>
  )
}

export default Home