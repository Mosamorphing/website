import "./publication.css";

const Sonata = () => {
  return (
    <div className="publication">
      <h1>The Sonata Puzzle and the Vowel Adaptation</h1>
      <p className="publication-date">
        April 2026 • watch on{" "}
        <a
          className="media-link-underline"
          href="https://www.youtube.com/watch?v=CVJ3GZcVoF4"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>{" "}
        or read on
      </p>
      <p>
        Most people think what they are looking at is the full picture. It is
        not.
      </p>
      <p>
        While reading <em>Godel, Escher, Bach</em> by Douglas Hofstadter, I
        came across something called the Sonata Puzzle. There are many ideas to
        explore in the book, but for this note, I am focusing on how the puzzle
        introduces the idea of figure and ground.
      </p>
      <p>Figure-ground is the relationship between what stands out and what hides.</p>
      <p>
        Hofstadter points out that all around us, in nature, painting, music,
        and everyday surroundings, there is always something visible, obvious,
        and foregrounded. But there is also something quieter in the
        background, something we barely notice.
      </p>
      <p>
        Every time we draw a stroke, or place an object somewhere, we
        automatically create negative space. We create a background.
      </p>
      <p>
        Some artists, painters, and musicians deliberately shape that
        background so it reveals as much as the foreground.
      </p>
      <p>
        A simple example is the hand. When we look at a hand, we see the palm
        and the fingers. But when the fingers are spread out, we also begin to
        see the shapes between them. Not "empty space" as we often tag it, but an essential part of the structure.
      </p>
      <p>This is the same idea that led me to the Vowel Adaptation.</p>
      <div className="publication-inline-image">
        <img src="/vowel.png" alt="Vowel Adaptation illustration" />
      </div>
      <p>
        When we look at the English alphabet and isolate the vowels, A, E, I,
        O, U, we naturally notice the consonants around them. But beyond the
        consonants, there are also hidden letters, hidden components, hidden
        words, and hidden meanings that the brain may have pushed into the
        background.
      </p>
      <p>
        The Vowel Adaptation is an attempt to bring those hidden parts forward.
      </p>
      <p>It is an exercise in seeing beyond the obvious.</p>
      <p>
        Explore the full publication on {" "}
        <a
          className="media-link-underline"
          href="https://nubianresearch.com/paper/douglas-hofstadters-sonata-puzzle-the-vowel-adaptation-1771917904472"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nubian Research
        </a>
        .
      </p>
    </div>
  );
};

export default Sonata;
