import React from 'react';
import "../../App.css";
import "../css/reset.css";
import "../css/blog.css";

const Blog = () => {
  return (
    <div className="blogContainer">
      <div className="blogTitle">
        <h1>Título do Post</h1>
      </div>
      <div className="blogCont">
        <div className="contText">
          <h2 className="contPerson">Arthur Possmoser</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum risus nec velit malesuada, a malesuada diam accumsan. Nulla posuere gravida nunc non faucibus. Nullam nec neque urna. Morbi volutpat, lacus sit amet mattis volutpat, libero quam fermentum est, sit amet malesuada nibh dui non sem. Integer sodales volutpat turpis, quis vestibulum nisi ultricies sed. Nullam maximus metus magna, vitae ultricies arcu pretium et. Phasellus ut nunc lacus. Maecenas gravida odio eget molestie sodales. Praesent fermentum finibus nulla vel fermentum. Mauris eget ullamcorper augue. Duis nisi dui, efficitur at mauris quis, sodales cursus neque. Vestibulum elementum nibh tincidunt, ornare enim sed, commodo sem.
          
          Nam bibendum leo non massa consequat, eu rutrum neque euismod. Nunc ac risus tempus, blandit elit ac, lacinia diam. Maecenas accumsan quam interdum risus feugiat ultricies. Vestibulum at erat vitae augue ullamcorper sagittis. Nam eleifend arcu tortor, eget scelerisque ante pharetra in. Aliquam eget dui eleifend, venenatis mauris eget, aliquam quam. Duis ac tellus orci. Aliquam sagittis vulputate neque sagittis sodales. Curabitur mauris felis, egestas et eros a, pulvinar pretium elit. Morbi nec nibh egestas, consequat tortor cursus, lacinia lorem. Sed lacinia, orci sit amet consequat mattis, nulla metus dignissim sem, a viverra ex mauris vel purus.</p>
        </div>
        <div className="ContDateTime">
          <p className="date">26/02/2009</p>
          <p className="time">19:37:00</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
