import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./media.css";
import placeholder from "../../../public/placeholder.webp";
import genz from "../../../public/genz.webp";
import moveee1 from "../../../public/moveee1.png";
import work from "../../../public/work.webp";
import peopledao from "../../../public/peopledao.jpeg";
import influence from "../../../public/influence.webp";
import into from "../../../public/into.webp";
import bitget from "../../../public/bitget.jpeg";
import independence from "../../../public/independence.png";
import desci from "../../../public/desci.png";
import multi from "../../../public/multi.png";
import tr2 from "../../../public/tr2.png";
import artist from "../../../public/artist.jpeg";
import writers from "../../../public/writers.jpeg";
import morphing500 from "../../../public/morphing500.png";
import newsletter from "../../../public/newsletter.png";
import mentors from "../../../public/mentors.jpg";
import desciRising from "../../../public/desci-rising.jpeg";
import squareCover from "../../../public/squareCover.png";
import Footer from "../Footer";

const Media = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Features data
  const features = [
    {
      title: "A Case for Decentralized Science",
      description:
        "The emergence of memecoins has sparked significant debate, particularly regarding their implications for the scientific community. Critics often dismiss memecoins as frivolous [...]",
      image: desci,
      path: "/media/publication/a-case-for-desci",
      category: "Publications",
    },
        {
      title: "Introduction to Multisignature Wallets",
      description: 
        "Multisignature wallets are a popular tool among various web3 projects for the management of shared funds and assets, providing enhanced decentralization, security, [...]",
       image: multi,
      link: "https://github.com/bartosjiri/multisig-signer-incentives/tree/main/outcomes/document#introduction-to-multisignature-wallets",
      category: "Publications",
    },
    {
      title: "A Revolutionary Future for Scientific Research through Decentralized Science",
      description:
        "Mosadoluwa Fasasi, a key figure in the DeSci movement and founder of DeSci NG, shares insights into the essence of DeSci, its potential to revolutionize scientific inquiry, and its transformative impact on global knowledge sharing.",
      image: moveee1,
      link: "https://themoveee.com/mosadoluwa-fasasi-envisions-a-revolutionary-future-for-scientific-research-through-decentralized-science/",
      category: "Features",
    },
    {
      title: "Artist Talk: Q&A with Daniel Sheldon, For The People NFT",
      description:
        "You can draw parallels between web3 and the American Revolution. Both reject old power structures. Both were a reaction to a deeply felt unfairness and a yearning [...]",
      image: artist,
      link: "https://peopledao.mirror.xyz/z8baQHZII3KLgJwNBN8bAq3gNdFPc9c2D-H4UwWKQgk",
      category: "Features",
    },
        {
      title: "DeSci Rising (Ep 8) ft. DeSci Nigeria",
      description:
        "Mosadoluwa Fasasi sat with Jelani Clarke, co-founder of DeSci World, to discuss the DeSci movement in Nigeria, the origin story, the impact so far, and what the future holds.",
      image: desciRising,
      link: "https://x.com/i/spaces/1lPJqMRLzMnJb",
      category: "Speakings",
    }, 
    {
      title: "AskMeAnything Session with Bitget Wallet",
      description:
        "From Memes to Millions: Rididng the Hottest Crypto Trends in 2024. Memecoins have been all the rage, but can you really become a millionaire from it? ",
      image: bitget,
      link: "https://x.com/BitgetWallet/status/1767430845487595903?s=20",
      category: "Speakings",
    },    
    {
      title: "A Map made for the Dark: 6 Curated Patterns for those Navigating the Unknwon",
      description:
        "There’s a chance you’re navigating an arc in your story where you wish someone had just handed you a manual. Guidance helps, but the truth is: [...]",
      image: squareCover,
      link: "https://selar.com/odp1f2",
      category: "Publications",
    },
       {
      title: "From The Morphing—500",
      description:
        "From The Morphing—500 with Mosadoluwa Fasasi brings you curated insights for life and enterprise. Join impactful conversations that shape your journey and inspire you to achieve your best.",
      image: morphing500,
      link: "https://open.spotify.com/show/3m8buR1Sm29ydeEIfa3Avt?si=2be26911d10447b5",
      category: "Speakings",
    },
            {
      title: "Breaking Barriers in Education",
      description:
        "Mosadoluwa Fasasi joined ThriveRise Africa to discuss ways to reshape education and the research culture in Nigeria through the latest advancement in technology.",
      image: tr2,
      link: "https://www.linkedin.com/posts/mosadoluwa-fasasi-4008b81a9_if-you-innovate-long-enough-its-only-a-activity-7285915623857999875-sPXl?utm_source=share&utm_medium=member_desktop",
      category: "Speakings",
    },
    {
      title:
        "On knowing the influences that shape your life and being true to yourself.",
      description:
        "To accurately apply a person’s judgment, point of view or “authoritative advice” on an issue to your life, you’ve got to know them in their entirety [...]",
      image: influence,
      path: "/media/blog/on-influences",
      category: "Blog",
    },
    {
      title: "The Work Culture and the New Breed",
      description:
        "We have enough gaps in our existence already. Things only worsen when we fail to understand how we can synchronise our [...]",
      image: work,
      link: "https://moveee.co/gen-z-startups-and-the-art-of-collaboration-in-modern-work-culture/",
      category: "Publications",
    },
    {
      title: "Why the Best Mentors Today Don’t Call Themselves Mentors",
      description:
        "Mosadoluwa Fasasi explores the cultural shift around mentorship, how it has been evolving, and what it means in this age of infinite knowledge and [...]",
      image: mentors,
      link: "https://themoveee.com/why-the-best-mentors-today-dont-call-themselves-mentors/",
      category: "Publications",
    },
    {
      title: "PeopleDAO: The Nigerian community Using NFTs",
      description:
        "The community at PeopleDAO is an example of how technology can aid the fundraising process. It’s not a solution [...]",
      image: peopledao,
      link: "https://moveee.co/peopledao-the-nigerian-community-implementing-nfts-in-tackling-human-trafficking/",
      category: "Publications",
    },
    {
      title: "Into the Mind of 4 Gen-X Yoruba Men and a Gen-Z observer",
      description:
        "The fearful and troubling thought is that what if these dividing beliefs begin to spread like wildfire amongst the Gen-Z as well? As I [...]",
      image: into,
      path: "/media/blog/into-the-mind",
      category: "Blog",
    },
    {
      title: "Gen-Z, Startups, and the Art of Collaboration",
      description:
        "One of the reasons why it appears that Gen-Zs lack the ability to collaborate with traditional institutions is mistrust.[...]",
      image: genz,
      link: "https://moveee.co/the-work-culture-and-the-new-breed-what-the-old-wineskin-means-for-the-new-wine/",
      category: "Publication",
    },
    {
      title: "Will Africa Become Another West?",
      description:
        "More than being a part of the global village, Africa is a hybrid continent. This is not just because it has 54 countries and thousands of ethnic groups,[...]",
      image: placeholder,
      link: "https://moveee.co/africa-will-become-another-west/",
      category: "Publications",
    },
    {
      title: "Independence, Remixed: For The People 1/1s",
      description:
        "Sheldon's contribution to the “For The People Project” departs from the conventional. While Trumbull aimed to immortalize the solemnity of political discourse, [...]",
      image: independence,
      link: "https://peopledao.mirror.xyz/lqEBxnYUKSa3bSV2UpaXlEbb3TBv5iLdgmIjMDt3XBU",
      category: "Features",
    },
        {
      title: "Newsletter on Blockchain and its offerings",
      description:
        "My latest piece reflects on the recent fallout between the $SCIHUB community and the founder of Sci-Hub, Alexandra Elbakyan. It's about trust, ideals, and the messy business of  [...]",
      image: newsletter,
      link: "https://themorphing500.substack.com/",
      category: "Publications",
    },
    {
      title: "AI and Creative Writers: The fate of Global Creatives",
      description:
        "In this workshop, Mosadoluwa Fasasi discussed the big AI topic and shared his perspectives on whether or not AI will take over the jobs of creative writers, [...]",
      image: writers,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7033530236898029568/",
      category: "Speakings",
    },
  ];

  const filteredFeatures =
    activeFilter === "All"
      ? features
      : features.filter((feature) => feature.category === activeFilter);

  const tabs = ["All", "Publications", "Speakings", "Features", "Blog"];

  return (
    <div className="min-h-[93.5dvh] flex-1 flex flex-col justify-between">
      <div className="media-wrapper layout__container">
        {/* Media Section */}
        <div className="media-section pt-8">
          {/* Filter Bar */}
          <div className="filter-bar overflow-x-auto px-4">
            {tabs?.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Features Section */}
          <section className="media-features-section mt-8">
            <div className="media-features-grid">
              {filteredFeatures.map((feature, index) => (
                <div key={index} className="media-feature-item">
                  <div
                    className="media-feature-image"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  ></div>
                  <div className="media-feature-text">
                    <h3 className="media-feature-title">
                      {feature.path ? (
                        <Link
                          to={feature.path}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {feature.title}
                        </Link>
                      ) : (
                        <a
                          href={feature.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {feature.title}
                        </a>
                      )}
                    </h3>
                    <p className="media-feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Section */}
      </div>
      <Footer />
    </div>
  );
};

export default Media;
