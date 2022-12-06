import React from "react";
import Contact from "../contact/Contact";
import Donate from "../donate/Donate";
import Combinations from "../combinations/Combinations";
import About from "../about/About";
import { Route, Routes } from "react-router-dom";
import "./content.scss";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Combinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/combinations" element={<Combinations />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Content;
