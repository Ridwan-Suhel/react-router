import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <CustomLink to="/home">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
          <li>
            <CustomLink to="/posts">Posts</CustomLink>
          </li>
          <li>
            <CustomLink to="/friends">Friends</CustomLink>
          </li>
        </ul>
      </nav>
      <h1>Welcome React Router</h1>
    </header>
  );
};

export default Header;
