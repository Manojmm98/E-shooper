import React from "react";

import { Link } from "react-router-dom";
import Section from "./SubContainer/BlogsComponent/Section";
import Hedaer from "./SubContainer/BlogsComponent/Hedaer";
import Footer from "./SubContainer/BlogsComponent/Footer";

function Blog() {
  return (
    <div>
      <Hedaer />
      <Section />
      <Footer />
    </div>
  );
}

export default Blog;
