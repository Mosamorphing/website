import React from "react";
import "./career.css"; //
import Footer from "../../components/Footer";
import multisight from "../../../public/multisight.png";
import wtf from "../../../public/wtf.png";
import desci from "../../../public/2b.png";
import peopleDao from "../../../public/pdao.png";
import techSemester from "../../../public/ts.png";

const Career = () => {
  return (
    <div className="min-h-[93.5dvh] flex flex-col justify-between">
      <div className="relative overflow-hidden">
        <section className="w-[1400px] mx-[auto] xl:w-full xl:pl-[60px] lg:pl-[40px] 2xs:pl-[20px] flex">
          <div className="career-content w-[90%] lg:w-full">
            <div className="career-text mb-10 z-[999]">
              <h2>
                "The journey is the reward. Embrace growth, seek wisdom, and be
                excellent in your delieverables."
              </h2>
              {/* <p>
                After a long and productive time in Web2, Mosadoluwa Fasasi
                transitioned full-time into Web3 in Q1 2024. Below are his
                adventures from his last engagement in Web2 to his current
                emphasis in Web3.{" "}
              </p> */}
              <div className="flex flex-col gap-y-10 my-10 md:w-[95%] sm:w-[98%]">
                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={desci}
                      alt="desci-ng"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-cover"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Nubian · (presently) <br /> Formerly known as "Decentralized Science Nigeria", Nubian is Africa's first decentralized research infrastructure, making African research open and globally accessible, forever. Check out
                    Nubian {" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="https://nubianresearch.com/"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>

                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={multisight}
                      alt="multisight"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Multisightapp · (previously) <br /> A performance analytics
                    product for individuals and teams using Multisignature wallet. Mosadoluwa Fasasi is a
                    co-builder at Multisightapp. They got into the Safe
                    Ecosystem grant in 2022, produced a                    <a
                    className="underline"
                    target="_blank"
                    href="https://github.com/bartosjiri/multisig-signer-incentives/blob/main/outcomes/document/README.md"
                    >
                    handbook on multisig wallets for Web3 projects and individuals
                    </a>
                    ,
                    and have continued to refine 
                    their analytics tool. To check
                    out Multisightapp, click{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="https://multisight.app/"
                    >
                      here
                    </a>
                    {""}.
                  </p>
                </div>
                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={wtf}
                      alt="wtf academy"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-contain"
                    />
                  </div>
                  <p className="flex-1 mt-[10px] sm:mt-[4px]">
                    WTF Academy · (previously) <br /> 
                    An open-source blockchain university. Mosadoluwa Fasasi was a core contributor, developing and maintaining technical learning resources. Some of the major ones include{' '}
                    <a
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/WTFAcademy/WTF-Ethers/tree/main/en"
                    >
                      Ethers.js
                    </a>
                    ,{' '}
                    <a
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://x.com/WTFAcademy_/status/1727735822269747318"
                    >
                      Huff
                    </a>
                    , and{' '}
                    <a
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/WTFAcademy/WTF-Solidity/tree/main/Languages/en"
                    >
                      Solidity
                    </a>
                    .
                    His work helped broaden access to the academy’s curriculum beyond Mandarin-speaking developers and supported its expansion into West Africa.
                  </p>
                </div>
                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={peopleDao}
                      alt="people dao"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    PeopleDAO · (previously) <br /> A meta-dao that
                    incubates public good projects. Mosadoluwa Fasasi worked as
                    a generalist member and rose to the administrative level
                    through his exceptional contributions, for which he was also
                    awarded. During his first few months of engagement at
                    PeopleDAO, he was quickly recognized as a{" "}
                    <span className="text-[#e63946]">''Rising Star''</span>, and
                    went on to become a{" "}
                    <span className="text-[#e63946]">
                      3x ''Contributor of the Month''
                    </span>
                    . He operated in various roles, led and collaborated with
                    cross-functional teams to support and accelerate incubated
                    projects. Some of the projects he accelerated includes;
                    We&apos;re Gonna Buy The Constitution (WAGBTC), found{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="https://constitutiondao2.com/"
                    >
                      here
                    </a>
                    , and The Lost Children of Benin City, found{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="https://giveth.io/project/documentary-about-nigerian-human-trafficking?tab=updates#:~:text=dedicated%20team(Ariel%20%26-,Mosa,-)%20on%20the%20PeopleDAO"
                    >
                      here
                    </a>
                    {""}.
                  </p>
                </div>
                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={techSemester}
                      alt="tech semester"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Techsemester | Talntsapp · (previously) <br /> An
                    ed-tech startup with a digital product for creators.
                    Mosadoluwa Fasasi worked as a generalist within a small team
                    of builders. His role varied over time. Some of the
                    designations were Scrum Master, Project Manager, and Content
                    Associate. Mosadoluwa contributed to key organization
                    decisions and helped achieve the milestone of the first 1000
                    users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[47%] flex items-center justify-center absolute top-0 right-0 lg:w-full lg:h-full lg:z-1 lg:opacity-50">
          <img
            className="career__about__hero__img h-[2000px]"
            src="/hero.webp"
            alt="Hero"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Career;
