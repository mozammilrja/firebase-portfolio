import React from "react";
import Typed from "react-typed";

const Slider = () => {
  return (
    <div className="header-img">
      <div className="react-typed">
      <br />
        <h1 >My PortFolio</h1><br />

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
  );
};

export default Slider;
