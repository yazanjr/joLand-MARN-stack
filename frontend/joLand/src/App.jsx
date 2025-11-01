import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Numbers2 from "./components/Numbers2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectCopy from "./components/ProjectCopy";
import AllProjects from "./pages/AllProjects";

const App = () => (
  <div className="w-full overflow-hidden">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Numbers2 />
            <About />
            <ProjectCopy />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  </div>
);

export default App;
