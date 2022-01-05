import React, { useState } from "react";
// import Header from "../../Components/Header/Header";
// import Ellipse from "../../Images/Ellipse.png";
import profilePhoto from "../../assets/Images/profileImage.jpg";
import profilePhoto2 from "../../assets/Images/profileImage2.jpg";
import navImage1 from "../../assets/Images/profileImage3.jpg";
// import twitterIcon from "../../assets/Images/twitter.png";
// import gitHubIcon from "../../assets/Images/github.svg";
// import linkedinIcon from "../../assets/Images/linkedin.svg";
// import gmailIcon from "../../assets/Images/icons8-gmail.svg";
import { Link } from "react-scroll";

const BigHero = () => {
  //Wink use state
  const [wink, setWink] = useState(false);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  //Navigation animation
  const navAnimation = () => {
    document.getElementsByClassName("photo").src = navImage1;
    console.log("Testing");

    setWink(true);
  };

  //Set Avatar back to normal
  const normal = () => {
    setWink(false);
  };

  return (
    <>
      <section className="container">
        <div className="Nav-bar">
          <ul onMouseOver={navAnimation} onMouseOut={normal}>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link to="#Resume" style={{ cursor: "pointer" }}>
                Resume
              </Link>
            </li>
            {/* <li>
              <Link to="#Projects">Projects</Link>
            </li> */}
          </ul>
        </div>

        <div className="profile">
          <div className="profile_photoBorder">
            {wink ? (
              <img
                src={navImage1}
                onMouseOver={(e) => (e.currentTarget.src = profilePhoto)}
                onMouseOut={(e) => (e.currentTarget.src = profilePhoto2)}
                className="profile_photo"
              />
            ) : (
              <img
                src={profilePhoto2}
                onMouseOver={(e) => (e.currentTarget.src = profilePhoto)}
                onMouseOut={(e) => (e.currentTarget.src = profilePhoto2)}
                className="profile_photo"
              />
            )}
          </div>
        </div>
        <div>
          <h1 className="title">
            <span className="Heading">ISA MUHAMMAD</span>
            <span className="Heading subHeading">Software Engineer.</span>
          </h1>
        </div>

        <div className="intro">
          <p className="introParagraph">
            Hi, Im Isa. Im a software engineer with
          </p>
          <p className="introParagraph2">
            a passion for building functional UI's & web applications.
          </p>
        </div>
      </section>
    </>
  );
};

export default BigHero;
