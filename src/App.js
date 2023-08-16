import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Add from "./views/Add";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add/:statusType" element={<Add />} />
    </Routes>
  );
}
export default App;
