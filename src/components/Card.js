import React from "react";
import service from "../images/Entrepreneur working.jpg";
import service2 from "../images/entrepreneurs-never-do.jpeg";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div>
      <section className=" align-center section bg-m-light border-top  text-center">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <div className="main-heading">Portfolio</div>
              <div className=" mx-auto"></div>
            </div>

            <div className=" col-md-4">
              <div className="card-shadow">
                <img
                  src={service}
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h5>Project</h5>
                  <h6>
                    Why do we use it? It is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                   
                  </h6>
                  <Link to="/services" className="btn btn-dark">
                    Read Me
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-shadow">
                <img
                  src={service2}
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h5>Project</h5>
                  <h6>
                  Why do we use it? It is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                   
                  </h6>
                  <Link to="/services" className="btn btn-dark">
                    Read Me
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-shadow">
                <img
                  src={service}
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h5>Project</h5>
                  <h6>
                  Why do we use it? It is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                  </h6>
                  <Link to="/services" className="btn btn-dark">
                    Read Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
