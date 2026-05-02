import { useEffect, useRef } from "react";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

import "./home.css"; // Custom CSS for the home page
import hero from "/hero.webp"; // Correct path for hero image
import placeholder1 from "/placeholder1.jpeg"; 
import multi1 from "/multi1.png"; // Correct path for genz image
import olhenry from "/olhenry.jpeg"; // Correct path for work image
import escher from "/escher.png"; // Correct path for mentors image

const Home = () => {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const section = heroSectionRef.current;

    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let frameId = 0;

    const updateHeroShift = () => {
      frameId = 0;
      const shift = Math.min(window.scrollY * 0.08, 18);
      section.style.setProperty("--hero-shift", `${shift}px`);
    };

    const queueHeroShift = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateHeroShift);
    };

    updateHeroShift();
    window.addEventListener("scroll", queueHeroShift, { passive: true });
    window.addEventListener("resize", queueHeroShift);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", queueHeroShift);
      window.removeEventListener("resize", queueHeroShift);
      section.style.removeProperty("--hero-shift");
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        className="hero-section flex h-auto lg:h-[78vh] xs:h-[92vh] items-center justify-between layout__container relative overflow-hidden"
      >
        <div className="hero-copy z-[10] mt-[-150px] sm:mt-[-80px]">
          <h1 className="hero-reveal hero-reveal-delay-1 text-[48px] lg:text-[44px] 2xs:text-[34px] xs:text-[30px] mb-[10px] leading-tight owner__name">
            MOSADOLUWA FASASI
          </h1>
          <h2 className="hero-reveal hero-reveal-delay-2 text-[32px] lg:text-[28px] 2xs:text-[21px] xs:text-[20px] font-[200] mb-5 2xs:mb-3 leading-tight">
            Adventurer, Thinker, Doer.
          </h2>
{/*           <h3 className="text-[25px] 2xs:text-base font-[200] mb-5 leading-tight">
            Principal, The Morphing—500
          </h3> */}
          <Link to="/work" className="hero-reveal hero-reveal-delay-3 hero-cta-wrap">
            <span className="about-me-btn">About me →</span>
          </Link>
        </div>
        <div className="hero-image-shell w-1/2 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:h-[78vh] xs:h-[92vh] 2xs:z-1 lg:opacity-50 2xs:flex 2xs:justify-center object-cover bg-top h-auto mr-[50px]">
          <img
            src={hero}
            alt="Hero"
            className="hero-image w-full h-auto max-h-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <div className="home-features-band bg-white">
        <section className="layout__container xl:px-[60px] lg:px-[40px] 2xs:px-[28px] pt-14 pb-20 md:pt-12 md:pb-14 2xs:pt-10 2xs:pb-10">
          <h2 className="text-[34px] md:text-[30px] 2xs:text-[18px] text-black">
            Featured Pieces 
          </h2>
          <div className="flex gap-x-[40px] gap-y-[40px] flex-wrap mt-8">
            {/* Feature 1 */}
            <a
              className="card-nudge w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center"
              href="https://moveee.co/mosadoluwa-fasasi-envisions-a-revolutionary-future-for-scientific-research-through-decentralized-science/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${placeholder1})` }}
              ></div>
              <div className="feature-text">
                <h3 className="text-[18px] 2xs:text-[15px] text-black">
                  A Revolutionary Future for Scientific Research through Decentralized Science
                  <span className="home-external-link-indicator" aria-hidden="true">
                    <HiArrowUpRight focusable="false" />
                  </span>
                </h3>
                <p className="text-[13px] leading-[1.55] text-[#666] mt-[10px]">
                  Mosadoluwa Fasasi, a key figure in the DeSci movement and founder of DeSci NG, 
                  shares insights into the essence of DeSci, its potential to revolutionize scientific 
                  inquiry, and its [...]
                </p>
              </div>
            </a>

                        {/* Feature 2 */}
            <Link
              className="card-nudge w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center"
              to="/media/publication/the-sonata-puzzle-and-the-vowel-adaptation"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${escher})` }}
              ></div>
              <div className="feature-text">
                <h3 className="text-[18px] 2xs:text-[15px] text-black">
                  {"Douglas Hofstadter's Sonata Puzzle: The Vowel Adaptation"}
                  <span className="home-internal-link-indicator" aria-hidden="true">
                    <HiArrowRight focusable="false" />
                  </span>
                </h3>
                <p className="text-[13px] leading-[1.55] text-[#666] mt-[10px]">
                {"This paper explores the recursive puzzle within Douglas Hofstadter's \"GEB: An Eternal Golden Braid\", and extends it through an original vowel-based adaptation [...]"}
                </p>
              </div>
            </Link>

            {/* Feature 3 */}
            <a
              className="card-nudge w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center"
              href="https://github.com/bartosjiri/multisig-signer-incentives/tree/main/outcomes/document#introduction-to-multisignature-wallets"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${multi1})` }}
              ></div>
              <div className="feature-text">
                <h3 className="text-[18px] 2xs:text-[15px] text-black">
                  Introduction to Multisignature Wallets
                  <span className="home-external-link-indicator" aria-hidden="true">
                    <HiArrowUpRight focusable="false" />
                  </span>
                </h3>
                <p className="text-[13px] leading-[1.55] text-[#666] mt-[10px]">
                  Multisignature wallets are a popular tool among various web3 projects for the management of shared funds and assets, providing enhanced decentralization, security, [...]
                </p>
              </div>
            </a>

            {/* Feature 4 */}
            <a
              className="card-nudge w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center"
              href="https://open.substack.com/pub/themorphing500/p/intermission-one-of-our-partners"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${olhenry})` }}
              ></div>
              <div className="feature-text">
                <h3 className="text-[18px] 2xs:text-[15px] text-black">
                  Reflections of a fallout
                  <span className="home-external-link-indicator" aria-hidden="true">
                    <HiArrowUpRight focusable="false" />
                  </span>
                </h3>
                <p className="text-[13px] leading-[1.55] text-[#666] mt-[10px]">
                  On the recent fallout between the $SCIHUB community and the founder of Sci-Hub, Alexandra Elbakyan. 
                  {"It's about trust, ideals, and the messy business of  [...]"}
                </p>
              </div>
            </a>

          </div>
          <Link to="/media" className="home-more-link">
            More in media →
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
