import React from "react";
import twitterIcon from "../../assets/Images/twitter.png";
import gitHubIcon from "../../assets/Images/github.svg";
import linkedinIcon from "../../assets/Images/linkedin.svg";
import gmailIcon from "../../assets/Images/icons8-gmail.svg";

const MediaLinks = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="media-links">
      <div className="media-container">
        <ul>
          <li className="li-border">
            <div className="media-border">
              <a
                href=""
                onClick={() => openInNewTab("https://twitter.com/Isa__M_")}
                className="icon-link"
              >
                <img src={twitterIcon} className="icon_twitter" />
              </a>
            </div>
          </li>

          <li className="li-border">
            <div className="media-border">
              <a
                href=""
                onClick={() => openInNewTab("https://github.com/Isa-Muhammad")}
                className="icon-link"
              >
                <img src={gitHubIcon} className="icon_github" />
              </a>
            </div>
          </li>

          <li className="li-border">
            <div className="media-border">
              <a
                href=""
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/isa-muhammad-223188196/"
                  )
                }
                className="icon-link"
              >
                <img src={linkedinIcon} className="icon_linkedin" />
              </a>
            </div>
          </li>

          <li className="li-border">
            <div className="media-border">
              <a href="mailto: abc@example.com" className="icon-link">
                <img src={gmailIcon} className="icon" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MediaLinks;
