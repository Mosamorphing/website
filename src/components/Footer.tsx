import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="layout__container">
        <div className="flex justify-center px-0 py-[30px] m-0 min-h-[100px] text-white">
          <div className="flex items-center gap-[30px] w-full">
            <div className="career-footer-line"></div>
            <div className="career-footer-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/mosadoluwa-fasasi-4008b81a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/mofasasi"
                target="_blank"
                rel="noopener noreferrer"
              >
                X/Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;