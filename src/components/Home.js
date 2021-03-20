import React from "react";
import { Link } from "react-router-dom";

import Vision from "./Vision";
import Card from "./Card";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <br/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="main-heading">My Section</div>
             <br/>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                sometimes by accident, sometimes on purpose (injected humour and
                the like).
              </p>
              <Link to="about" className="btn btn-success">
                Read Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*-------------------------------------- Value---------------------------------- */}
      <br/>
      <Card/>
      <Vision />

      {/* "CARD" */}

     
                   

    </div>
  );
};

export default Home;
