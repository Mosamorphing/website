import "./publication.css";

const ScientificComputing = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="publication">
      <h1>Interpreting Africa&apos;s scientific computing landscape</h1>
      <p className="article-date">
        October 2026 • read full paper on{" "}
        <a
          className="media-link-underline"
          href="https://scienceforafrica.foundation/sites/default/files/2026-07/Mapping%20Scientific%20Computing%20to%20Power%20Research%2C%20Big%20Data%2C%20and%20AI%20in%20Africa.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Science for Africa Foundation
        </a>
      </p>
      <p>
        In July 2026, I participated in the Pan-African Scientific Computing
        Convening, led by the Science for Africa Foundation, Nairobi, Kenya.
      </p>
      <p>
        The convening brought together researchers and practitioners from
        across the continent to interpret findings from a scientific computing
        mapping exercise and refine recommendations for the position paper,{" "}
        <em>
          Mapping Scientific Computing to Power Research, Big Data, and AI in
          Africa: Evidence and Pathways for a Federated Ecosystem
        </em>
        .
      </p>
      <p>
        The mapping exercise received 118 institutional submissions from 28
        African countries, of which 67 were retained for analysis. The findings
        revealed an average scientific computing readiness of 40.1% among the
        participating institutions, with gaps extending beyond hardware to
        software, connectivity, energy, technical expertise, and operational
        sustainability.
      </p>
      <p>
        Our ongoing work at{" "}
        <a
          className="media-link-underline"
          href="https://nubianresearch.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nubian Research
        </a>{" "}
        continues to deepen our understanding of Africa&apos;s research and
        scientific computing landscape, the gaps that exist, and the practical
        pathways for addressing them.
      </p>
      <p>
        One of our strongest positions is that while the continent continues
        to work towards building and owning more of its computing
        infrastructure, there&apos;s a lot that can be achieved by making
        existing computing technologies and resources more visible, accessible,
        and shareable across institutions.
      </p>
      <p>
        This means exploring infrastructure-as-a-service models, creating
        service catalogues that help researchers discover available resources,
        and participating in shared GPU pools.
      </p>
      <p>
        Grateful to have contributed alongside colleagues from across the
        continent, and to the Science for Africa Foundation, for leading this
        effort.
      </p>
      <div className="publication-related-section">
        <p className="publication-related-note">
          We welcome avenues of partnership and co-creation. See how{" "}
          <a
            className="media-link-underline"
            href="https://nubianresearch.com/donate"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p className="publication-related-note">
          To explore other avenues of co-creation, write to us at{" "}
          <a
            className="media-link-underline"
            href="mailto:info@nubianresearch.com"
          >
            info@nubianresearch.com
          </a>
          .
        </p>
      </div>
      <small className="publication-copyright">
        © {currentYear} Nubian Research. All rights reserved.
      </small>
    </div>
  );
};

export default ScientificComputing;
