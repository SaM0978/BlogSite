import React from "react";
import "./Blog.css";
import "../../styles/global.css";

interface BlogProps {
  blogObject: {
    title: Object;
    description: string;
    imageUrl: string;
  };
}

const Blog: React.FC<BlogProps> = (props) => {
  const { title, description, imageUrl } = props.blogObject;
  console.log(title);
  return (
    <div className="Blog b-r">
      <div className="blog-img d-flex b-r">
        <img src={imageUrl} className="blog-thumbnail b-r" />
      </div>
      <div className="blog-body">
        <div className="blog-title d-flex">
          <h2 className=" title">{title}</h2>
        </div>
        <div className="blog-description">
          <h3 className="t-center description">{description} dsd</h3>
        </div>
      </div>
    </div>
  );
};

export default Blog;
