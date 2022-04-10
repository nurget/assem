import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png"; // 마땅한 로고가 없어서 일단 내 개인프로젝트에서 사용하던 로고 넣었음 수정 후 주석 제거하기

export default function Navbar() {
  const [navState, setNavState] = useState(false);

  return (
    <nav>
      <div className="assem-container">
        <div className="assem">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode"></div>
        </div>
      </div>
      <div className="links-container">
        <ul className="links">
          <li>
            <a href="#">Assem</a>
          </li>
          <li>
            <a href="#">프로젝트</a>
          </li>
          <li>
            <a href="#">블로그</a>
          </li>
          <li>
            <a href="#">회원가입</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
