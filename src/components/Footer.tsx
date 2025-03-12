import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="layout__container">
        <div className="flex justify-center px-0 py-[30px] m-0 min-h-[100px] text-white xs:border-t">
          <div className="flex items-center xs:justify-center gap-[30px] w-full">
            <div className="footer__line xs:hidden"></div>
            <div className="flex gap-[30px] text-sm text-black footer__links">
            <a
                href="https://github.com/Mosamorphing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.instagram.com/mofasasi"
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
                X
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
