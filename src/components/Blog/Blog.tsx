import React from "react";
import "./Blog.css";
import "../../styles/global.css";

interface BlogProps {
  blogObject: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

const Blog: React.FC<BlogProps> = ({ blogObject }) => {
  const { title, description, imageUrl } = blogObject;

  return (
    <div className="Blog b-r">
      <div className="blog-img d-flex b-r">
        <img
          src={imageUrl}
          className="blog-thumbnail b-r"
          alt="Blog Thumbnail"
        />
      </div>
      <div className="blog-body">
        <div className="blog-title">
          <h2 className="title t-center">{title}</h2>
        </div>
        <div className="blog-description">
          <h3 className="description">{description}..</h3>
        </div>
      </div>
    </div>
  );
};

export default Blog;
