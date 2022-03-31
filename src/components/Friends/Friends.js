import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import "./Friends.css";
const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h2>This is Friends page {friends.length}</h2>
      <p>Welcome my friends page</p>
      <div className="friends-wrapper">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
