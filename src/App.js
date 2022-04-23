//libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Playground from "pages/playground/Playground";
import Error404 from "pages/errors/Error404/Error404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Playground />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
