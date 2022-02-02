import React from "react";
import BlogSingleFooter from "./SubContainer/BlogSingleContainer/BlogSingleFooter";
import BlogSingleHeader from "./SubContainer/BlogSingleContainer/BlogSingleHeader";
import BlogSingleSection from "./SubContainer/BlogSingleContainer/BlogSingleSection";

function BlogSingle() {
  return (
    <div>
      <BlogSingleHeader />
      <BlogSingleSection />
      <BlogSingleFooter />
    </div>
  );
}

export default BlogSingle;
