import React from "react";
import Typed from "react-typed";
import Card from "./Card";

const Service = () => {
  return (
    <div>
      <div className="services">
        <div className="react-typed">
          <br />
          <h1>Welcome to Service section</h1>
          <br />

          <Typed
            className="typed"
            strings={[
              "Web Development",
              "ReactJS",
              "Bootstrap",
              "MaterialUI",
              "Firebase",
              "FireStore",
            ]}
            typeSpeed={40}
            // typeSpeed={60}
            loop
          />
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Service;
