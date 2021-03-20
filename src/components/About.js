import React from "react";
import Typed from "react-typed";

const About = () => {
  return (
    <div>
      <div className="about">
      <div className="react-typed">
      <br />
        <h1 >Welcome to about section</h1><br />

        <Typed className="typed"
          strings={['Web Development',
          'ReactJS',
          'Bootstrap',
          'MaterialUI',
          'Firebase',
          'FireStore']}
          typeSpeed={40}
          // typeSpeed={60}
          loop
        />
      </div>

      </div>

     
      {/* <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h5>About</h5>
            </div>

            <div className="col-md-8 my-auto">
              <h6 className="float-end">Quick Link</h6>
            </div>
            <div className="col-md-4">
              <h6>Home / About</h6>
              <div>
                <p className="text-white mb-m-1">Kharar Chandigarh India</p>
              </div>
            </div>
          </div>
        </div>
      </section>  */}

      <section className="section bg-light border-bottom">
        <div className="container">
          <h5 className="main-heading">About Me</h5>
          <p>
            Software Development Student | Seeking Full-Time Software
            Engineering Job |ReactJS, JavaScript, CSS, HTML |2020Graduate
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
