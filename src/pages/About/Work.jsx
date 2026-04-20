import { useState } from "react";
import "./work.css";
import multisight from "../../../public/multisight.png";
import wtf from "../../../public/wtf.png";
import desci from "../../../public/2b.png";
import peopleDao from "../../../public/pdao.png";
import techSemester from "../../../public/ts.png";

const encodeFormData = (data) =>
  new URLSearchParams(data).toString();

const Work = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState("idle");

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    setContactForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setContactStatus("sending");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "work-contact",
          ...contactForm,
        }),
      });

      setContactForm({ name: "", email: "", message: "" });
      setContactStatus("sent");
    } catch {
      setContactStatus("error");
    }
  };

  return (
    <div className="min-h-[93.5dvh] flex flex-col justify-between">
      <div className="relative overflow-hidden">
        <section className="layout__container flex">
          <div className="work-content">
            <div className="work-text mb-10 z-[999]">
              <div className="work-intro">
                <p>
                  Mosadoluwa Fasasi is a Solutions Architect. Founder & Executive
                  Director at{" "}
                  <a
                    href="https://nubianresearch.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#e63946" }}
                  >
                    Nubian Research (fka DeSci Nigeria)
                  </a>
                  , an open-access decentralised research infrastructure that
                  welcomes scholarly contributions from every discipline.{" "}
                </p>
                <p>
                  In 2023, he served on the administrative team at People
                  Decentralised Autonomous Organisation, where he helped steer
                  historic projects, including their bid (attempted twice) to
                  collectively own a physical copy of the Constitution of the
                  United States. At PeopleDAO, he was recognised as a
                  <span style={{ color: "#e63946" }}> “Rising Star” </span>
                  and a
                  <span style={{ color: "#e63946" }}>
                    {" "}
                    3x Contributor of the Month{" "}
                  </span>
                  for accelerating incubated projects and delivering value
                  across the DAO.
                </p>
                <p>
                  Before venturing into the blockchain ecosystem, Mosadoluwa
                  Fasasi wore many hats as an operator in the Nigerian startup
                  ecosystem, delivering human-centred experiences and unlocking
                  value for diverse stakeholders. With a background in Science
                  Education, he now bridges his expertise in blockchain to
                  decentralise knowledge. His work focuses on positioning
                  regions of the global south as an active contributor to global
                  knowledge production through open science and research.
                </p>
              </div>
              <div className="work-roles flex flex-col my-8 md:w-[95%] sm:w-[98%]">
                <p className="work-section-label">Most recent work affiliations</p>
                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={desci}
                      alt="desci-ng"
                      className="work-logo-img object-cover"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Nubian · (presently) <br /> Formerly known as &quot;Decentralized Science Nigeria&quot;, Nubian is an open-access decentralised research infrastructure that welcomes scholarly contributions from every discipline. Check out
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

                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={multisight}
                      alt="multisight"
                      className="work-logo-img object-contain"
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
                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={wtf}
                      alt="wtf academy"
                      className="work-logo-img object-contain"
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
                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={peopleDao}
                      alt="people dao"
                      className="work-logo-img object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    PeopleDAO · (previously) <br /> A meta-dao that
                    incubates public good projects. Mosadoluwa Fasasi worked as
                    a generalist member and rose to the administrative level
                    through his exceptional contributions, for which he was also
                    awarded. During his first few months of engagement at
                    PeopleDAO, he was quickly recognized as a{" "}
                    <span className="text-[#e63946]">“Rising Star”</span>, and
                    went on to become a{" "}
                    <span className="text-[#e63946]">
                      3x “Contributor of the Month”
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
                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={techSemester}
                      alt="tech semester"
                      className="work-logo-img object-contain"
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
              <section className="work-contact" aria-labelledby="work-contact-title">
                <p className="work-section-label">Reach out</p>
                <div className="work-contact-grid">
                  <div className="work-contact-copy">
                    <h2 id="work-contact-title">
                      Available for thoughtful work with individuals and teams
                      building with intent.
                    </h2>
                  </div>
                  <form
                    className="work-contact-form"
                    name="work-contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleContactSubmit}
                  >
                    <input type="hidden" name="form-name" value="work-contact" />
                    <p className="hidden">
                      <label>
                        Don’t fill this out if you’re human:
                        <input name="bot-field" />
                      </label>
                    </p>
                    <label>
                      <span>What should I call you?</span>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label>
                      <span>Where can I reach you?</span>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        autoComplete="email"
                        required
                      />
                    </label>
                    <label>
                      <span>What’s on your mind?</span>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        rows="5"
                        required
                      />
                    </label>
                    <button type="submit" disabled={contactStatus === "sending"}>
                      {contactStatus === "sending" ? "Sending..." : "Send message →"}
                    </button>
                    <p
                      className="work-contact-status"
                      role="status"
                      aria-live="polite"
                    >
                      {contactStatus === "sent" &&
                        "Sent. Thanks for reaching out."}
                      {contactStatus === "error" &&
                        "Something slipped. Please try again in a moment."}
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
