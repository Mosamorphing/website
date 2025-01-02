import React from "react";
import "./home.css"; // Custom CSS for the home page
import hero from "/hero.png"; // Correct path for hero image
import placeholder from "/placeholder.webp"; // Correct path for placeholder image
import genz from "/genz.webp"; // Correct path for genz image
import work from "/work.webp"; // Correct path for work image
import peopledao from "/peopledao.jpeg"; // Correct path for peopledao image
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex h-auto lg:h-[78vh] xs:h-[92vh] items-center justify-between layout__container relative overflow-hidden">
        <div className="">
          <h1 className="text-[70px] lg:text-[50px] 2xs:text-[40px] xs:text-[32px] mb-[10px]">
            MOSADOLUWA FASASI
          </h1>
          <h2 className="text-[70px] lg:text-[50px] 2xs:text-[40px] xs:text-[32px] font-[200] mb-5">
            Adventurer, Thinker, Doer.
          </h2>
          <h3 className="text-[25px] font-[200] mb-5">
            Principal, The Morphing—500
          </h3>
          <Link to="/about/bio">
            <button className="about-me-btn">About Me</button>
          </Link>
        </div>
        <div className="w-1/2 lg:absolute bottom-0 right-0 md:hidden object-cover h-auto mr-[50px]">
          <img src={hero} alt="Hero" />
        </div>
      </section>

      {/* Features Section */}
      <div className="bg-white">
        <section className="layout__container xl:px-[60px] lg:px-[40px] 2xs:px-[20px] py-20 md:py-14 2xs:py-10">
          <h2 className="text-[45px] md:text-[32px] 2xs:text-[28px] text-black">
            Features on The Moveee Magazine
          </h2>
          <div className="flex gap-x-[40px] gap-y-[40px] flex-wrap mt-8">
            {/* Feature 1 */}
            <div className="w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center">
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
              <div className="feature-text">
                <h3 className="feature-title">
                  <a
                    href="https://themoveee.com/africa-will-become-another-west/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Will Africa Become Another West?
                  </a>
                </h3>
                <p className="feature-description">
                  More than being a part of the global village, Africa is a
                  hybrid continent. This is not just because it has 54 countries
                  and thousands of ethnic groups,[...]
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center">
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${genz})` }}
              ></div>
              <div className="feature-text">
                <h3 className="feature-title">
                  <a
                    href="https://themoveee.com/the-work-culture-and-the-new-breed-what-the-old-wineskin-means-for-the-new-wine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Gen-Z, Startups, and the Art of Collaboration in Modern Work
                    Culture
                  </a>
                </h3>
                <p className="feature-description">
                  One of the reasons why it appears that Gen-Zs lack the ability
                  to collaborate with traditional institutions is mistrust.
                  Gen-Zs have grown up in a time of unprecedented [...]
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center">
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${work})` }}
              ></div>
              <div className="feature-text">
                <h3 className="feature-title">
                  <a
                    href="https://themoveee.com/gen-z-startups-and-the-art-of-collaboration-in-modern-work-culture/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    The Work Culture and the New Breed: What the Old Wineskin
                    Means for the New Wine
                  </a>
                </h3>
                <p className="feature-description">
                  We have enough gaps in our existence already. Things only
                  worsen when we fail to understand how we can synchronise our
                  [...]
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center">
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${peopledao})` }}
              ></div>
              <div className="feature-text">
                <h3 className="feature-title">
                  <a
                    href="https://themoveee.com/peopledao-the-nigerian-community-implementing-nfts-in-tackling-human-trafficking/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    PeopleDAO: The Nigerian community Implementing NFTs in
                    Tackling Human Trafficking
                  </a>
                </h3>
                <p className="feature-description">
                  The community at PeopleDAO is an example of how technology can
                  aid the fundraising process. It’s not a solution [...]
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
      {/* <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-line"></div>
          <div className="footer-links">
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
      </footer> */}
    </>
  );
};

export default Home;
