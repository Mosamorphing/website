import React from "react";
import "./career.css"; // Custom CSS for Career page

const Career = () => {
  return (
    <>
      {/* Career Section */}
      <section className="career-section">
        <div className="career-content">
          <div className="career-text">
            <h2>"The journey is the reward. Embrace growth, seek wisdom, and be excellent in your delieverables."</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="career-image">
            <img src="/hero.png" alt="Career" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="career-footer-section">
        <div className="career-footer-content">
          <div className="career-footer-line"></div>
          <div className="career-footer-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/mosadoluwa-fasasi-4008b81a9/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/mofasasi" target="_blank" rel="noopener noreferrer">
              X/Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Career;
