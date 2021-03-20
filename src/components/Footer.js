import React from "react";
import { Link } from "react-router-dom";
// import {LinkedInIcon} from '@material-ui/icons';

const Footer = () => {
  return (
    <div>
      <section className="section footer bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <br />
              <h5 className="heading">My information</h5>
              <hr />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
            <div className=" mt-5  col-md-4">
              <h6>Quick Link</h6>
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/about">About</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className="col-md-4">
              <br />
              <h5 className="heading">Contact information</h5>
              <hr />
              <div>
                <p className="text-white mb-m-1">Kharar Chandigarh India</p>
                <p className="text-white mb-m-1">phone: +918102472325</p>
                <p className="text-white mb-m-1">
                  Email: mozammilrja0218@ggmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">
                  Copyright &copy; Your Website 2021
                </span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/mozammil-raja/">
                      <i className="icon fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className=" icon list-inline-item">
                    <a href="https://github.com/mozammilrja">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#something">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
