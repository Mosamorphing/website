import React from "react";
import "./bio.css"; // Custom CSS for Bio page // Replace with the actual image path

const Bio = () => {
  return (
    <>
      {/* Bio Section */}
      <section className="bio-section">
        <div className="bio-content">
          <div className="bio-text">
            <h2>
              "If you feel stuck & you don't know where to go, what to do & who
              to become, create a beautiful list of where you don't want to go,
              what you don't want to do & who you don't want to become. Make the
              list really clear because that right there is a pointer. Godspeed,
              my friend!"
            </h2>
            <p>
              Mosadoluwa Fasasi is the Principal at {""}
              <a
                href="https://www.linkedin.com/company/the-morphing%E2%80%94500"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#e63946" }}
              >
                The Morphing—500
              </a>
              , a life and enterprise consult.
            </p>
            <p>
              He is an adventurous serial entrepreneur with a proven track
              record of managing and creating user-centred experiences across
              diverse industries. With a solid background in writing &
              communication, design & visuals, and technical domains, he has
              hands-on experience leading and collaborating with
              cross-functional AGILE teams.
            </p>
            <p>
              His versatile background includes successful stints in the
              fashion, fintech, design, education, communications, and
              blockchain industries, making him adept at navigating various
              sectors to deliver cutting-edge solutions that resonate with
              users.
            </p>
            <p>
              Combining creativity, technical acumen and a deep understanding of
              customer needs, he drives project, product and business excellence
              wherever you find him.{" "}
            </p>
            <p>
              He has been identified by many adjectives: Sage, Rebel, Genius,
              Psychologist, Counsellor; he answers them all.
            </p>
            <p>
              To see some of his entrepreneurial adventures, click {""}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#e63946" }}
              >
                Career
              </a>
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:z-1 lg:opacity-50">
            <img className="about__hero__img" src="/hero.png" alt="Hero" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bio-footer-section">
        <div className="bio-footer-content">
          <div className="bio-footer-line"></div>
          <div className="bio-footer-links">
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
      </footer>
    </>
  );
};

export default Bio;
