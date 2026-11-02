import { Link } from "react-router-dom";
import "./work.css";
import multisight from "../../../public/multisight.png";
import wtf from "../../../public/wtf.png";
import desci from "../../../public/2b.png";
import peopleDao from "../../../public/pdao.png";
import techSemester from "../../../public/ts.png";
import flowResearch from "../../../public/flow-research.svg";
import attentionFactory from "../../../public/attention-factory.png";
import survivingNigeria from "../../../public/surviving-nigeria.svg";
import scienceForAfrica from "../../../public/science-for-africa-foundation.png";

const Work = () => {
  return (
    <div className="min-h-[93.5dvh] flex flex-col justify-between">
      <div className="relative overflow-hidden">
        <section className="layout__container flex">
          <div className="work-content">
            <div className="work-text mb-10 z-[999]">
              <div className="work-intro">
                <p>
                  Mosadoluwa Fasasi, or
                  <span style={{ color: "#e63946" }}> &ldquo;Mosa&rdquo; </span>
                  for short, is a Product &amp; Operations Architect working at
                  the intersection of strategy, emerging technologies, and the
                  systems shaping what comes next.
                </p>
                <p>
                  His work revolves around ideas and what it takes to make them
                  work. Across ventures, products, and research ecosystems, he
                  works with founders, individuals, and teams to explore
                  emerging possibilities, challenge existing assumptions, and
                  develop the strategies and systems needed to bring ambitious
                  concepts to life.
                </p>
                <p>
                  His multidisciplinary experience spans product development,
                  operations, growth, research infrastructure, and strategic
                  advisory. His contributions have ranged from decentralised
                  economic design and game-world development to collaborative
                  efforts addressing Africa&apos;s scientific computing future.
                </p>
                <p>
                  He currently leads Nubian Research, a decentralised,
                  open-access research collective advancing scholarly
                  participation and knowledge production across Africa.
                  Previously, he worked across the Nigerian startup and
                  blockchain ecosystems, including PeopleDAO, where he was
                  recognised as a
                  <span style={{ color: "#e63946" }}> &ldquo;Rising Star&rdquo; </span>
                  and
                  <span style={{ color: "#e63946" }}>
                    {" "}
                    3x Contributor of the Month
                  </span>{" "}
                  for his work advancing community-led initiatives.
                </p>
                <p>
                  He holds a BSc in Science Education from the University of
                  Ilorin and is currently enrolled in Master of Information
                  Technology at Miva Open University.
                </p>
                <p>
                  He continues to draw on his multidisciplinary background to
                  help people and organisations build with intent, particularly
                  as technology reshapes how we live, learn, and work.
                </p>
              </div>
              <div className="work-roles flex flex-col my-8 md:w-[95%] sm:w-[98%]">
                <p className="work-section-label">
                  Selected Strategic Contributions
                </p>
                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={scienceForAfrica}
                      alt="Science for Africa Foundation"
                      className="work-logo-img work-logo-img--wordmark object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Science for Africa Foundation <br />
                    <em>
                      Research Strategy &mdash; Scientific Computing &amp;
                      Infrastructure
                    </em>
                    <span className="work-role-description">
                      Contributed through Nubian Research to a Pan-African
                      scientific computing initiative led by the Science for
                      Africa Foundation. As part of a continental research
                      convening, he helped interpret findings on Africa&apos;s
                      scientific computing readiness and shape recommendations
                      for a more connected, accessible, and sustainable
                      research computing ecosystem.
                    </span>
                    <span className="work-role-description">
                      The collaborative effort informed the 2026 position
                      paper, <em>Mapping Scientific Computing to Power Research,
                      Big Data, and AI in Africa: Evidence and Pathways for a
                      Federated Ecosystem</em>.
                    </span>
                    <span className="work-role-description">
                      <Link
                        className="work-inline-link"
                        to="/media/publication/interpreting-africas-scientific-computing-landscape"
                      >
                        Read about the contribution and access the full paper
                      </Link>
                      .
                    </span>
                  </p>
                </div>
                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={survivingNigeria}
                      alt="Surviving Nigeria"
                      className="work-logo-img work-logo-img--wordmark object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Surviving Nigeria (GTA Lagos) <br />
                    <em>
                      Product Strategy &mdash; Game Design &amp; World-Building
                    </em>
                    <span className="work-role-description">
                      Contributed early product and game-design thinking to{" "}
                      <em>Surviving Nigeria</em>, a GTA-inspired multiplayer
                      browser game set in Lagos. His recommendations explored
                      the game&apos;s underlying world, player motivations,
                      progression systems, and the social dynamics that could
                      make its environment more compelling.
                    </span>
                    <span className="work-role-description">
                      Following its launch, the game&apos;s announcement
                      surpassed{" "}
                      <a
                        className="work-inline-link"
                        href="https://x.com/kohawithstuff/status/2106559908799823924?a=KteZaB4-iqGWy-SxNg0&s=20"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        1.1 million impressions on X
                      </a>{" "}
                      with over 100,000 players in just 5 days.
                    </span>
                  </p>
                </div>
                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={attentionFactory}
                      alt="Attention Factory"
                      className="work-logo-img work-logo-img--wordmark object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Attention Factory <br />
                    <em>
                      Strategic Intelligence &mdash; Emerging Ecosystems
                    </em>
                    <span className="work-role-description">
                      Contributed strategic insights to Attention Factory
                      through ecosystem research and engagement with emerging
                      initiatives. His contributions introduced the founder to
                      relevant organisational models, community-building
                      approaches, and opportunities worth exploring, expanding
                      the perspectives available for shaping the venture&apos;s
                      direction.
                    </span>
                  </p>
                </div>
                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={flowResearch}
                      alt="Flow Research"
                      className="work-logo-img object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Flow Research <br />
                    <em>
                      Strategic Advisory &mdash; Decentralised Science &amp;
                      Economic Model Exploration
                    </em>
                    <span className="work-role-description">
                      Advised the venture&apos;s leadership during an exploration
                      of its economic layer. Drawing on his understanding of
                      decentralised science, tokenomics, and emerging research
                      protocols, he helped interrogate assumptions around
                      incentive structures, economic coordination, and existing
                      models within the DeSci ecosystem, contributing
                      perspectives that reframed the venture&apos;s approach and
                      possible directions.
                    </span>
                  </p>
                </div>
              </div>
              <div className="work-roles flex flex-col my-8 md:w-[95%] sm:w-[98%]">
                <p className="work-section-label">
                  Selected Work &amp; Affiliations
                </p>
                <div className="work-role-item flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="work-logo">
                    <img
                      src={desci}
                      alt="desci-ng"
                      className="work-logo-img object-cover"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    <a
                      className="work-inline-link"
                      href="https://nubianresearch.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Nubian Research
                    </a>{" "}
                    · Present <br />
                    <em>
                      Founder &mdash; Research Infrastructure &amp; Open Science
                    </em>
                    <span className="work-role-description">
                      Founded and leads Nubian Research, an open-access,
                      decentralised research collective working to expand how
                      knowledge is produced, shared, and accessed across Africa.
                      Through its research repository, publications, and
                      collaborative initiatives, Nubian explores new models for
                      scholarly participation, research accessibility, and
                      infrastructure development, with particular attention to
                      the realities of the Global South.
                    </span>
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
                    PeopleDAO · Previously <br />
                    <em>Operations &mdash; Decentralised Governance</em>
                    <span className="work-role-description">
                      Served on the administrative team at PeopleDAO, a
                      community-led organisation experimenting with new models
                      of collective ownership, governance, and coordination.
                      Working across operational and cross-functional
                      initiatives, he helped advance incubated projects,
                      including the organisation&apos;s ambitious efforts around
                      collective ownership of a physical copy of the United
                      States Constitution and the Declaration of Independence.
                    </span>
                    <span className="work-role-description">
                      He was recognised as a{" "}
                      <span className="text-[#e63946]">
                        &ldquo;Rising Star&rdquo;
                      </span>{" "}
                      and{" "}
                      <span className="text-[#e63946]">
                        3x Contributor of the Month
                      </span>{" "}
                      for his contributions to project development and
                      operations across the DAO.
                    </span>
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
                    <a
                      className="work-inline-link"
                      href="https://multisight.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Multisightapp
                    </a>{" "}
                    · Previously <br />
                    <em>Product Development &mdash; Web3 Analytics</em>
                    <span className="work-role-description">
                      Co-built Multisightapp, a performance analytics product
                      for individuals and teams operating with multisignature
                      wallets. The venture received support through the Safe
                      Ecosystem Grant in 2022 and produced{" "}
                      <a
                        className="work-inline-link"
                        href="https://github.com/bartosjiri/multisig-signer-incentives/blob/main/outcomes/document/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        educational resources
                      </a>{" "}
                      to help Web3 projects and individuals adopt and manage
                      multisignature wallets.
                    </span>
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
                    WTF Academy · Previously <br />
                    <em>
                      Technical Education &mdash; Open-Source Development
                    </em>
                    <span className="work-role-description">
                      Contributed to the development and maintenance of
                      open-source technical learning resources at WTF Academy,
                      a blockchain education initiative. His work covered
                      technologies including{" "}
                      <a
                        className="work-inline-link"
                        href="https://github.com/WTFAcademy/WTF-Solidity/tree/main/Languages/en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solidity
                      </a>
                      ,{" "}
                      <a
                        className="work-inline-link"
                        href="https://github.com/WTFAcademy/WTF-Ethers/tree/main/en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ethers.js
                      </a>
                      , and{" "}
                      <a
                        className="work-inline-link"
                        href="https://x.com/WTFAcademy_/status/1727735822269747318"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Huff
                      </a>
                      , supporting the academy&apos;s efforts to make technical
                      education accessible beyond Mandarin-speaking developers
                      and extend its reach into West Africa.
                    </span>
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
                    Techsemester | Talntsapp · Previously <br />
                    <em>
                      Startup Operations &mdash; Product &amp; Programme
                      Development
                    </em>
                    <span className="work-role-description">
                      Worked across multiple functions at Techsemester and
                      Talntsapp, an education-technology venture developing
                      digital experiences for creators. His responsibilities
                      spanned Scrum facilitation, project management, curriculum
                      development, content, and operational decision-making. He
                      contributed to the venture&apos;s early development and its
                      milestone of reaching its first 1,000 users.
                    </span>
                  </p>
                </div>
              </div>
              <section className="work-contact" aria-labelledby="work-contact-title">
                <div className="work-contact-copy">
                  <h2 id="work-contact-title">Working on what&apos;s next?</h2>
                  <p>
                    Mosa is available for product strategy, concept development,
                    operations, research strategy, and selected advisory
                    engagements.
                  </p>
                  <Link to="/booking">Book Mosa &rarr;</Link>
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
