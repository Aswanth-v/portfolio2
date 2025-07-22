import React, { useEffect, useRef } from "react";
import "./Works.css";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Correct icon import
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

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
    <div className="works">
      <div className="work-head">
        <p className="para">0.2 &nbsp; Devolepment</p>
        <h1 className="OG-work">Things I've Built</h1>
      </div>
      <div className="works-container">
        <div ref={(el) => (tiltRefs.current[0] = el)} className="tittle-card ">
          <div className="shoping">
            <h2 className="shop">
              Pawora &nbsp;
              <FontAwesomeIcon icon={faThumbsUp} />{" "}
            </h2>

            <p className="shop-para">
              Pawora is a MERN stack social media platform focused on stray
              animal welfare. Users can share posts about animals in need, with
              images and detailed descriptions. Others can view, support, and
              donate to help solve these problems. Built using Redux for state
              management and Cloudinary for image uploads.
            </p>
            <a
              href="https://github.com/Aswanth-v/Pawora"
              target="_blank"
              rel="noopener noreferrer"
              className="sorce"
            >
              Source
            </a>
          </div>
        </div>
        <div ref={(el) => (tiltRefs.current[1] = el)} className="tittle-card">
          <div className="shoping">
            <h2 className="shop">
              Fragrenzo &nbsp;
              <FontAwesomeIcon icon={faShoppingCart} />
            </h2>

            <p className="shop-para">
              Fragrenzo is a full-stack e-commerce website for premium perfumes,
              built using the MERN stack. It features user authentication,
              product filtering, and secure payments via Razorpay. Admins can
              manage products and orders, while users can browse and place
              orders easily. Cloudinary is used for product image uploads, and
              Redux Toolkit manages the app state.
            </p>
            <div className="live">
              <a
                href="https://github.com/Aswanth-v/Fragrenzo"
                target="_blank"
                rel="noopener noreferrer"
                className="sorce"
              >
                Source
              </a>
              <a
                href="https://fragrenzo-1.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sorce"
              >
                Live
              </a>
            </div>
          </div>
        </div>

        <div ref={(el) => (tiltRefs.current[2] = el)} className="tittle-card">
          <div className="shoping">
            <h2 className="shop">
              Netflix-clone &nbsp;
              <FontAwesomeIcon icon={faTicketAlt} />
            </h2>

            <p className="shop-para">
              Netflix Clone is a React-based web app that mimics the Netflix UI
              and functionality. It allows users to browse movies and TV shows
              by categories using data fetched from a movie API. Built with
              React, styled-components, and Axios for API integration.
            </p>
            <a
              href="https://github.com/Aswanth-v/Netflix_clone"
              target="_blank"
              rel="noopener noreferrer"
              className="sorce"
            >
              Source
            </a>
          </div>
        </div>



        <div ref={(el) => (tiltRefs.current[3] = el)} className="tittle-card">
          <div className="shoping">
            <h2 className="shop">
              Shopping cart  &nbsp;
              <FontAwesomeIcon icon={faShoppingCart} />
            </h2>

            <p className="shop-para">
            This is a shopping cart web application built using Node.js, Express.js, MongoDB, and Handlebars (HBS). It offers core e-commerce features like product listing, cart management, and order placement, all rendered server-side for a smooth and functional user experience.
            </p>
            <a
              href="https://github.com/Aswanth-v/shopping-cart"
              target="_blank"
              rel="noopener noreferrer"
              className="sorce"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
