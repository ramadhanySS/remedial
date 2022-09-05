import React from "react";
import "./style.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <span className="brand">OjiStore</span>
            <p className="brand-tagline font weight-light">
              Get your order as soon as quickly
            </p>
          </div>
          <div className="col-3 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Our careers</li>
              <li className="list-group-item">Privacy</li>
              <li className="list-group-item">Terms & Conditions</li>
            </ul>
          </div>
          <div className="col-3 mr-5">
            <h6 className="mt-2">Connnect us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">halawaoji@gmail.com</li>
              <li className="list-group-item">021 - 2208 - 1996</li>
              <li className="list-group-item">
                <span>Kelapa Gading, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2020 • All rights reserved •
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
