import React from 'react';
import "../../App.css";
import "../css/reset.css";
import "../css/blog.css";

const Blog = ({title, name, text, color}) => {
  return (
    <div className="blogContainer" style={{background:color}}>
      <div className="blogTitle">
        <h1>{title}</h1>
      </div>
      <div className="blogCont">
        <div className="contText">
          <h2 className="contPerson">{name}</h2>
          <p>{text}</p>
        </div>
        <div className="ContDateTime">
          <p className="date"></p>
          <p className="time"></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
