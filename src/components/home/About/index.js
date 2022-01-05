import React from "react";
import htmlLogo from "../../../assets/Images/html-5.png";
import cssLogo from "../../../assets/Images/css3.png";
import javascriptLogo from "../../../assets/Images/javascript.png";
import reactLogo from "../../../assets/Images/react.gif";

const About = () => {
  return (
    <>
      <section className="container" id="about">
        <div className="card">
          <h1
            className="header"
            style={{
              fontSize: "50px",
              fontFamily:
                "proxima nova bold, Helvetica Neue, Helvetica, Arial, Sans-serif",
            }}
          >
            About
          </h1>
          <p style={{ color: "grey", fontSize: "20px" }}>
            {" "}
            I build user interfaces.
          </p>
          <p className="para">
            I enjoy building creative and functional user interfaces on both web
            and mobile applications. When im not writing code i typically enjoy
            spending my time at the gym.
          </p>

          <div className="skill-sec">
            <h1
              className="header"
              style={{
                fontSize: "50px",
                fontFamily:
                  "proxima nova bold, Helvetica Neue, Helvetica, Arial, Sans-serif",
                marginTop: "100px",
              }}
            >
              Skills
            </h1>
            <div className="skill">
              <div className="skill_icon">
                <img src={htmlLogo} style={{ width: "130px" }} />
                <p>Html</p>
              </div>

              <div className="skill_icon">
                <img src={cssLogo} style={{ width: "130px" }} />
                <p>CSS</p>
              </div>

              <div className="skill_icon">
                <img src={javascriptLogo} style={{ width: "130px" }} />
                <p>JavaScript</p>
              </div>

              <div className="skill_icon">
                <img src={reactLogo} style={{ width: "130px" }} />
                <p>React</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
