import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter color-red "><bold/>Fresh Season, Fresh Styles!
              </h5>
              <p style={{ color: "red" }}>
              Discover the latest arrivals with exclusive designs and timeless elegance. Elevate your style with our newest collection—crafted just for you!            
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
/*card-text fs-5 d-none d-sm-block red*/