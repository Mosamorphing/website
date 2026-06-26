import "./publication.css";

const ContextualStudies = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="publication">
      <h1>The importance of contextual studies</h1>
      <p className="publication-date">June 2026</p>
      <p>
        At the June 12 “Young, Bold, and Building” hangout by The Future
        Project, a question came up during the fishbowl conversation: Why do
        many Nigerians believe their vote does not count?
      </p>
      <p>
        I contributed based on something we had seen at Nubian Research.
      </p>
      <p>
        In Q1 2025, we ran Project Showcase, an incubation experiment where we
        supported undergraduate-led research projects across universities. One
        of the projects we worked with was titled “Determinant of Voter
        Behavior at the Student Hall of Residence Election in University of
        Ibadan” by Adekunle Daniel.{" "}
        <a
          className="media-link-underline"
          href="https://nubianresearch.com/paper/determinant-of-voter-behavior-at-the-student-hall-of-residence-election-in-university-of-ibadan-nig"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find it here
        </a>
        .
      </p>
      <p>
        The study surveyed 150 students during the Independence Hall election
        at the University of Ibadan. One of the major findings was that about
        75% of the respondents said politics was important to them, but that
        awareness did not strongly translate into electoral participation, and
        a major reason was trust.
      </p>
      <p>
        The study further suggests that the problem is not always that people
        do not understand the importance of politics. Sometimes, they
        understand it clearly. They just do not trust the system enough to
        believe their participation will produce anything meaningful. And yet,
        many still believe in advocacy. They may not fully trust the system,
        but they still want it to change.
      </p>
      <p>
        A student hall election may look “small”, but it does reveal patterns
        deeply rooted in the larger political landscape in Nigeria. And this is
        why contextual studies matter: It helps us move beyond broad
        assumptions like “young people are apathetic” or “people don’t care.”
        Sometimes, people care. They are just responding to what the system has
        taught them.
      </p>
      <p>
        This is also part of why Nubian Research exists: to make room for
        locally grounded studies that may not look “big” at first glance, but
        reveal how our society works, how it has changed over time, and where
        it may be headed, providing a stronger foundation for improving and/or
        designing better solutions.
      </p>
      <div className="publication-related-section">
        <p className="publication-related-note">
          We welcome avenues of partnership and co-creation. See how 
          {" "}
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
            href="mailto:info.nubianresearch@gmail.com"
          >
            info.nubianresearch@gmail.com
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

export default ContextualStudies;
