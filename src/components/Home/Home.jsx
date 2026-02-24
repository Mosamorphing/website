// React import not required with new JSX transform
import { Link } from "react-router-dom";

import "./home.css"; // Custom CSS for the home page
import hero from "/hero.webp"; // Correct path for hero image
// import placeholder from "/placeholder.webp"; 
import placeholder1 from "/placeholder1.jpeg"; 
// import moveee1 from "/moveee1.png";
import multi1 from "/multi1.png"; // Correct path for genz image
import olhenry from "/olhenry.jpeg"; // Correct path for work image
import escher from "/escher.png"; // Correct path for mentors image
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex h-auto lg:h-[78vh] xs:h-[92vh] items-center justify-between layout__container relative overflow-hidden">
        <div className="z-[10] mt-[-150px] sm:mt-[-80px]">
          <h1 className="text-[53px] lg:text-[50px] 2xs:text-[40px] xs:text-[32px] mb-[10px] leading-tight owner__name">
            MOSADOLUWA FASASI
          </h1>
          <h2 className="text-[40px] lg:text-[30px] 2xs:text-[25px] xs:text-[23px] font-[200] mb-5 2xs:mb-3 leading-tight">
            Adventurer, Thinker, Doer.
          </h2>
{/*           <h3 className="text-[25px] 2xs:text-base font-[200] mb-5 leading-tight">
            Principal, The Morphing—500
          </h3> */}
          <Link to="/bio">
            <button className="about-me-btn">About Me</button>
          </Link>
        </div>
        <div className="w-1/2 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:h-[78vh] xs:h-[92vh] 2xs:z-1 lg:opacity-50 2xs:flex 2xs:justify-center object-cover bg-top h-auto mr-[50px]">
          <img
            src={hero}
            alt="Hero"
            className="w-full h-auto max-h-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <div className="bg-white">
        <section className="layout__container xl:px-[60px] lg:px-[40px] 2xs:px-[20px] py-20 md:py-14 2xs:py-10">
          <h2 className="text-[45px] md:text-[32px] 2xs:text-[20px] text-black">
            Featured Pieces 
          </h2>
          <div className="flex gap-x-[40px] gap-y-[40px] flex-wrap mt-8">
            {/* Feature 1 */}
            <a
              className="w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center"
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
                <h3 className="text-[20px] 2xs:text-base text-black">
                  A Revolutionary Future for Scientific Research through Decentralized Science
                </h3>
                <p className="text-sm text-[#666] mt-[10px]">
                  Mosadoluwa Fasasi, a key figure in the DeSci movement and founder of DeSci NG, 
                  shares insights into the essence of DeSci, its potential to revolutionize scientific 
                  inquiry, and its [...]
                </p>
              </div>
            </a>

                        {/* Feature 2 */}
            <a
              className="w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center"
              href="https://nubianresearch.com/paper/douglas-hofstadters-sonata-puzzle-the-vowel-adaptation-1771875757549"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="feature-image"
                style={{ backgroundImage: `url(${escher})` }}
              ></div>
              <div className="feature-text">
                <h3 className="text-[20px] 2xs:text-base text-black">
                  {"Douglas Hofstadter's Sonata Puzzle: The Vowel Adaptation"}
                </h3>
                <p className="text-sm text-[#666] mt-[10px]">
                {"This paper explores the recursive puzzle within Douglas Hofstadter's \"GEB: An Eternal Golden Braid\", and extends it through an original vowel-based adaptation [...]"}
                </p>
              </div>
            </a>

            {/* Feature 3 */}
            <a
              className="w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center"
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
                <h3 className="text-[20px] 2xs:text-base text-black">
                  Introduction to Multisignature Wallets
                </h3>
                <p className="text-sm text-[#666] mt-[10px]">
                  Multisignature wallets are a popular tool among various web3 projects for the management of shared funds and assets, providing enhanced decentralization, security, [...]
                </p>
              </div>
            </a>

            {/* Feature 4 */}
            <a
              className="w-[22.5%] lg:w-[30%] md:w-[46%] 2xs:w-full flex flex-col items-center"
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
                <h3 className="text-[20px] 2xs:text-base text-black">
                  Reflections of a fallout
                </h3>
                <p className="text-sm text-[#666] mt-[10px]">
                  On the recent fallout between the $SCIHUB community and the founder of Sci-Hub, Alexandra Elbakyan. 
                  {"It's about trust, ideals, and the messy business of  [...]"}
                </p>
              </div>
            </a>


          </div>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
