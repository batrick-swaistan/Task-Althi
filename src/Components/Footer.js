import React from "react";
import "./Footer.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

const Footer = () => {
  return (
    <div className="footer-container flex flex-row gap-4 justify-content-center align-items-center">
      <div className="flex flex-row  gap-4 footer-start">
        <div className="flex flex-column footer-content-main">
          <div
            className="flex flex-column gap-3 footer-one"
            style={{ width: "280px" }}
          >
            <h3>Batrick</h3>
            <p>
              Hello! I'm Batrick Swaistan, a 21-year-old recent graduate in
              Computer Science and Engineering.
            </p>
            <p>
              {" "}
              I am a creative and skilled web developer with prior experience as
              an intern at Tcare Private Limited, where I worked as a Data
              Miner.
            </p>
          </div>
        </div>
        <div className="flex flex-column footer-content-main ">
          <div
            className="flex flex-column gap-3  footer-two"
            style={{ width: "180px" }}
          >
            <h3>Social</h3>
            <div className="flex social-icons ">
              <div className="coln flex align-items-center jusitfy-content-center">
                <i className="pi pi-instagram soci-icons"></i>
              </div>
              <div className="coln  flex align-items-center jusitfy-content-center">
                <i className="pi pi-facebook soci-icons"></i>
              </div>
              <div className="coln  flex align-items-center jusitfy-content-center">
                <i className="pi pi-github soci-icons"></i>
              </div>
              <div className="coln  flex align-items-center jusitfy-content-center">
                <i className="pi pi-linkedin soci-icons"></i>
              </div>
              <div className="coln  flex align-items-center jusitfy-content-center">
                <i className="pi pi-twitter soci-icons"></i>
              </div>
            </div>
            <div className="address-social flex flex-column gap-4 ">
              <div className="contact flex align-items-center">
                <p className="pi pi-globe ">
                  {" "}
                  <span className="social-cont ">Kanyakumari</span>
                </p>
              </div>
              <div className="contact flex align-items-center">
                <i className="pi pi-phone">
                  {" "}
                  <span className="social-cont">+91-9012345678</span>
                </i>
              </div>
              <div className="contact flex align-items-center ">
                <i className="pi pi-envelope">
                  {" "}
                  <span className="social-cont">xyz@yahoo.com</span>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-column footer-content-main">
          <div
            className="flex flex-column gap-3 footer-three"
            style={{ width: "380px" }}
          >
            <h3>Connect</h3>
            <div className="form flex flex-column  gap-2">
              <div className="form-main flex gap-2 ">
                <div className="p-inputgroup flex-1">
                  <InputText placeholder="First Name" type="text" />
                </div>
                <div className="p-inputgroup flex-1">
                  <InputText placeholder="Last Name" type="text" />
                </div>
                <div className="p-inputgroup flex-1">
                  <InputText placeholder="Email" type="email" />
                </div>
              </div>

              <div className="flex ">
                <InputTextarea
                  rows={5}
                  cols={60}
                  placeholder="Enter your Message"
                />
              </div>
              <div className="btn flex  cursor-pointer">
                <span className=" flex align-items-center justify-content-center ">
                  <Button label="Submit" />
                  <i className="pi pi-angle-right angle-ico flex align-items-center justify-content-center"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
