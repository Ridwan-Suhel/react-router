import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Friend.css";
const Friend = (props) => {
  const { name, username, id } = props.friend;
  const navigate = useNavigate();
  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  return (
    <div className="single-box">
      <h2>{name}</h2>
      <Link style={{ color: "#fff", marginRight: "7px" }} to={"/friend/" + id}>
        {username} - {id}
      </Link>
      <button onClick={showFriendDetail}>
        {username} - {id}
      </button>
    </div>
  );
};

export default Friend;
