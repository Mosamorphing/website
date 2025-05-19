import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// Import components
import Home from "./components/Home/Home";
import Bio from "./pages/About/Bio";
import Career from "./pages/About/Career";
import Media from "./components/Media/Media";
import Ebook from "./components/Ebook/Ebook";
import Influence from "./pages/Blog/Influence";
import IntoTheMind from "./pages/Blog/IntoTheMind";
import Desci from "./pages/Publication/Desci";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/career" element={<Career />} />
        <Route path="media">
          <Route index element={<Media />} />
          <Route path="blog/on-influences" element={<Influence />} />
          <Route path="blog/into-the-mind" element={<IntoTheMind />} />
          <Route path="publication/a-case-for-desci" element={<Desci />} /> 
        </Route>
        <Route path="/a-map-made-for-the-dark" element={<Ebook />} />
      </Routes>
    </Router>
  );
};

export default App;
