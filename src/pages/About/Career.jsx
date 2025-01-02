import React from "react";
import "./career.css"; // Custom CSS for Career page
import Footer from "../../components/Footer";

const Career = () => {
  return (
    <>
      {/* Career Section */}
      <section className="layout__container relative">
        <div className="career-content">
          <div className="career-text mb-10">
            <h2>
              "The journey is the reward. Embrace growth, seek wisdom, and be
              excellent in your delieverables."
            </h2>
            <p>
              After a long and productive time in Web2, Mosadoluwa Fasasi
              transitioned full-time into Web3 in Q1 2024. Below are his
              adventures from his last engagement in Web2 to his current
              emphasis in Web3.{" "}
            </p>
            <p>
              DeSci NG (Dec 2024 till date): A community built on the ideals of
              Decentralised Science. Mosadoluwa Fasasi leads this community with
              the goal of increasing the quality of education in Nigeria and
              accelerating innovation via academia, research and public good
              projects. To check out DeSci NG, click here
              (https://x.com/DeSci_NG)
              <br />
              Multisightapp (Dec 2023 till date): An analytics tool for
              Multisignature wallet and teams. Mosadoluwa Fasasi is a co-builder
              at Multisightapp. They got into the Safe Ecosystem grant in 2022
              and have shipped an MVP. To check out Multisightapp, click here
              (https://x.com/multisightapp)
            </p>
            <p>
              WTF Academy Africa (Jan 2023 till date): An open-source Web3
              university onboarding Web2 talent. Mosadoluwa Fasasi leads this
              project and since Q2 2023, his team has reached over 100 talent.
              To see one of their pop-ups in 2024, click here
              {/* (https://www.linkedin.com/feed/update/urn:li:activity:7195716748053008384). */}
              They recently struck a partnership with The Family of Students,
              Naija's largest community of students online, to continue to drive
              their mission forward.
            </p>
            <p>
              PeopleDAO (August 2022 - Dec 2024): A meta-dao that incubates
              public good projects. Mosadoluwa Fasasi worked as a generalist
              member and rose to the administrative level through his
              exceptional contributions which he was also awarded for. During
              his first few months of engagement at PeopleDAO, he was quickly
              recognized as a ''Rising Star'', and went on to become a 3x
              ''Contributor of the Month'' He operated in various roles, led and
              collaborated with cross-functional teams to support and accelerate
              incubated projects. Some of the projects he accelerated includes;
              We&aposre Gonna Buy The Constitution (WAGBTC),
              (https://constitutiondao2.com/), and The Lost Children of Benin
              City
              {/* (https://giveth.io/project/documentary-about-nigerian-human-trafficking?tab=updates#:~:text=dedicated%20team(Ariel%20%26-,Mosa,-)%20on%20the%20PeopleDAO) */}
            </p>
            <p>
              Techsemester | Talntsapp (Jan 2023 - Apr 2024): An ed-tech startup
              with a digital product for creators. Mosadoluwa Fasasi worked as a
              generalist within a small team of builders. His role varied over
              time. Some of the designations were Scrum Master, Project Manager,
              and Content Associate. Mosadoluwa contributed to key organization
              decisions and helped achieve the milestone of the first 1000
              users.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:z-1 lg:opacity-50">
            <img className="about__hero__img" src="/hero.png" alt="Hero" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Career;
