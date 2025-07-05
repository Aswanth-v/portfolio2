import React, { useEffect, useRef } from 'react';
import './Works.css';
import VanillaTilt from 'vanilla-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';  // Correct icon import
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';



function Works() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 25,
          speed: 200,
          glare: true,
          "max-glare": 0.5,
        });
      }
    });
  }, []);

  return (
    <div className='works'>
       <div className='work-head'>
        <p className='para'>0.2 &nbsp; Devolepment</p>
        <h1 className='OG-work'>Things I've Built</h1>
        
      </div>
      <div className='works-container'>
     
       
      <div
        ref={(el) => (tiltRefs.current[0] = el)}
        className="tittle-card "
      > 
      <div className='shoping'>
        <h2 className='shop'>Shoping Cart 
         &nbsp; 
        <FontAwesomeIcon  icon={faShoppingCart} />   </h2>
       
        <p className='shop-para'>A ShoppingCart,built with Node.js and Express.js, lets users browse products, add items to their cart, and check out easily.It manages user sessions, updates carts in real-time.MongoDB handles the data, making the app fast and reliable for e-commerce needs.It integrates Razorpay for secure and hassle-free payments, ensuring smooth transactions.</p>
        <a href="https://github.com/Aswanth-v/shopping-cart" target="_blank" rel="noopener noreferrer" className='sorce'>Source</a>

        </div>
      </div>

      <div
        ref={(el) => (tiltRefs.current[1] = el)}
        className="tittle-card"
      >
        <div className='shoping'>
        <h2 className='shop'>Netflix-clone
         &nbsp; 
         <FontAwesomeIcon icon={faTicketAlt} />

         </h2>
       
        <p className='shop-para'>A ShoppingCart,built with Node.js and Express.js, lets users browse products, add items to their cart, and check out easily.It manages user sessions, updates carts in real-time.MongoDB handles the data, making the app fast and reliable for e-commerce needs.It integrates Razorpay for secure and hassle-free payments, ensuring smooth transactions.</p>
        <a href="https://github.com/Aswanth-v/Netflix_clone" target="_blank" rel="noopener noreferrer" className='sorce'>Source</a>

        </div>
      </div>
      <div
        ref={(el) => (tiltRefs.current[2] = el)}
        className="tittle-card"
      >
        <div className='shoping'>
        <h2 className='shop'>Netflix-clone
         &nbsp; 
         <FontAwesomeIcon icon={faTicketAlt} />

         </h2>
       
        <p className='shop-para'>A ShoppingCart,built with Node.js and Express.js, lets users browse products, add items to their cart, and check out easily.It manages user sessions, updates carts in real-time.MongoDB handles the data, making the app fast and reliable for e-commerce needs.It integrates Razorpay for secure and hassle-free payments, ensuring smooth transactions.</p>
        <a href="https://github.com/Aswanth-v/Netflix_clone" target="_blank" rel="noopener noreferrer" className='sorce'>Source</a>

        </div>
      </div>
   
      </div>
    
    </div>
    
  );
}

export default Works;
