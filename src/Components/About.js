import React from "react";
import "./About.css";
import Opera from "../Assets/opera.jpg";

const About = () => {
  return (
    <div className="about-container ">
      <div className="about-content">
        <div className="flex about-start-one-first ">
          <div className="first-row first-row-main flex align-items-center justify-content-end">
            <div className="flex flex-column first-row-cont first-row-cont-main gap-3">
              <h3 className="heading-about-one ">
                <span className="about-main">About</span> Us
              </h3>
              <p>
                Menubar component uses the menubar role and the value to
                describe the menu can either be provided with aria-labelledby or
                aria-label props.
              </p>
            </div>
          </div>
          <div className="sec-row sec-row-main">
            <div className="about-img flex align-items-center justify-content-start">
              <img src={Opera} alt="Opera House" className="img-grid" />
            </div>
          </div>
        </div>
        <div className="flex about-start-one-middle ">
          <div className="first-row flex align-items-center justify-content-end">
            <div className="flex flex-column first-row-cont">
              <img src={Opera} alt="Opera House" className="img-grid" />
            </div>
          </div>
          <div className="sec-row flex align-items-center justify-content-start ">
            <div className="flex flex-column first-row-cont gap-3 pl-2">
              <h3 className="heading-about-one ">
                <span className="about">About</span> Us
              </h3>
              <p>
                Menubar component uses the menubar role and the value to
                describe the menu can either be provided with aria-labelledby or
                aria-label props.
              </p>
            </div>
          </div>
        </div>
        <div className="flex about-start-one">
          <div className="first-row flex align-items-center justify-content-end">
            <div className="flex flex-column first-row-cont gap-3">
              <h3 className="heading-about-one ">
                <span className="about">About</span> Us
              </h3>
              <p>
                Menubar component uses the menubar role and the value to
                describe the menu can either be provided with aria-labelledby or
                aria-label props.
              </p>
            </div>
          </div>
          <div className="sec-row">
            <div className="about-img flex align-items-center justify-content-start">
              <img src={Opera} alt="Opera House" className="img-grid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
