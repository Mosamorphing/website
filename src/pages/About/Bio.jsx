import React from "react";

import "./bio.css";
import Footer from "../../components/Footer";

const Bio = () => {
  return (
    <div className="min-h-[93.5dvh] flex flex-col justify-between">
      {/* Bio Section */}
      <div className="relative overflow-hidden">
        <section className="w-[1400px] mx-[auto] xl:w-full xl:pl-[60px] lg:pl-[40px] 2xs:pl-[20px] flex">
          <div className="bio-content w-[47%] lg:w-full">
            <div className="bio-text mb-10">
              <h2>
                "If you feel stuck & you don't know where to go, what to do &
                who to become, create a beautiful list of where you don't want
                to go, what you don't want to do & who you don't want to become.
                Make the list really clear because that right there is a
                pointer. Godspeed, my friend!"
              </h2>
              <p>
                Mosadoluwa Fasasi is a Solutions Architect. Founder & Executive Director at{" "}
                <a
                  href="https://nubianresearch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#e63946" }}
                >
                  Nubian Research (fka DeSci Nigeria)
                </a>
                , an initiative building open, decentralised research infrastructure
                for Africa.{" "}
              </p>
              <p>
                In 2023, he served on the administrative team at People
                Decentralised Autonomous Organisation, where he helped steer
                historic projects, including their bid (attempted twice) to
                collectively own a physical copy of the Constitution of the United
                States. At PeopleDAO, he was recognised as a
                <span style={{ color: "#e63946" }}> “Rising Star” </span>
                and a
                <span style={{ color: "#e63946" }}> 3x Contributor of the Month </span>
                for accelerating incubated projects and delivering value across the
                DAO.
              </p>
              <p>
                Before venturing into the blockchain ecosystem, Mosadoluwa Fasasi
                wore many hats as an operator in the Nigerian startup ecosystem,
                delivering human-centred experiences and unlocking value for
                diverse stakeholders. With a background in Science Education, he
                now bridges his expertise in blockchain to decentralise knowledge.
                His work focuses on positioning Africa as an active contributor to
                global knowledge production through open science and research.
              </p>
              <p>
                To see some of his professional adventures, click {""}
                <a
                  href="/career"
                  style={{ textDecoration: "none", color: "#e63946" }}
                >
                  Career
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="w-[47%] flex items-center justify-center absolute top-0 right-0 lg:w-full lg:h-full lg:z-1 lg:opacity-50">
          <img
            className="bio__about__hero__img h-[2000px]"
            src="/hero.webp"
            alt="Hero"
          />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Bio;
