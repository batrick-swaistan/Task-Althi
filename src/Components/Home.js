import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      {/* <div>
        <Navbar />
      </div> */}

      <div className="home-container flex justify-content-evenly align-items-end ">
        <div className="home-content one-cont cursor-pointer pb-3 ">
          <h3>QWERTY</h3>
          <p>
            Menubar component uses the menubar role and the value to describe
            the menu can either be provided with aria-labelledby or aria-label
            props.
          </p>
        </div>
        <div className="home-content cursor-pointer  pb-3">
          <h3>QWERTY</h3>
          <p>
            Menubar component uses the menubar role and the value to describe
            the menu can either be provided with aria-labelledby or aria-label
            props.
          </p>
        </div>
        <div className="home-content cursor-pointer  pb-3">
          <h3>QWERTY</h3>
          <p>
            Menubar component uses the menubar role and the value to describe
            the menu can either be provided with aria-labelledby or aria-label
            props.
          </p>
        </div>
        <div className="home-content cursor-pointer  pb-3">
          <h3>QWERTY</h3>
          <p>
            Menubar component uses the menubar role and the value to describe
            the menu can either be provided with aria-labelledby or aria-label
            props.
          </p>
        </div>
        <div className="home-content cursor-pointer  pb-3">
          <h3>QWERTY</h3>
          <p>
            Menubar component uses the menubar role and the value to describe
            the menu can either be provided with aria-labelledby or aria-label
            props.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
