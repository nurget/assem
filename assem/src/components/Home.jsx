import React from "react";
import home from "../assets/home.png";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Lorem Ipsum</p>
          <h1 className="title">
            충격! 엑시언니 <br /> 강아지고양이곰도리
          </h1>
          <p className="description">
            동아리 홈페이지인데 쓸 말이 없어서 일단 대충 구색만 갖추려고 한다.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container"></div>
        </div>
      </div>
    </div>
  );
}
