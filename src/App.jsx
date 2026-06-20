import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// Import components
import Home from "./components/Home/Home";
import Work from "./pages/About/Work";
import Media from "./components/Media/Media";
import Influence from "./pages/Blog/Influence";
import Desci from "./pages/Publication/Desci";
import Sonata from "./pages/Publication/Sonata";
import ContextualStudies from "./pages/Publication/ContextualStudies";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="media">
          <Route index element={<Media />} />
          <Route path="notes/on-influences" element={<Influence />} />
          <Route
            path="blog/on-influences"
            element={<Navigate to="/media/notes/on-influences" replace />}
          />
          <Route path="publication/a-case-for-desci" element={<Desci />} />
          <Route
            path="publication/the-sonata-puzzle-and-the-vowel-adaptation"
            element={<Sonata />}
          />
          <Route
            path="talks/the-importance-of-contextual-studies"
            element={<ContextualStudies />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
