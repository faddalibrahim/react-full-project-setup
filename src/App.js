//libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Playground from "pages/playground/Playground";
import Error404Svg from "pages/errors/Error404/Error404Svg";
import ErrorBoundary from "pages/errors/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Playground />} />
          <Route path="/error-boundary" element={<ErrorBoundary />} />
          <Route path="*" element={<Error404Svg />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
