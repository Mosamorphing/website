import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// Import components
import Home from "./components/Home/Home";
import Bio from "./pages/About/Bio";
import Career from "./pages/About/Career";
import Media from "./components/Media/Media";
import Influence from "./pages/Blog/Influence";
import IntoTheMind from "./pages/Blog/IntoTheMind";
import Desci from "./pages/Publication/Desci";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/bio" element={<Bio />} />
        <Route path="/about/career" element={<Career />} />
        <Route path="/media" element={<Media />} />
        <Route path="/media/blog/on-influences" element={<Influence />} />
        <Route path="/media/blog/into-the-mind" element={<IntoTheMind />} />
        <Route path="/media/publication/a-case-for-desci" element={<Desci />} />
      </Routes>
    </Router>
  );
};

export default App;
