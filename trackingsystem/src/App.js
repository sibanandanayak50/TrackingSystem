import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./pages/HomePage.js";
import About from "./pages/AboutPage.js";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
