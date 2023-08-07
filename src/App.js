import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* Other routes */}
    </Routes>
  );
}
export default App;
