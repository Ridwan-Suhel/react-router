import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h2>
        Details about dusto:{" "}
        <span style={{ fontSize: "18px", fontWeight: "normal" }}>
          {friend.username}
        </span>
      </h2>
      <ul>
        <li>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Full Name:
          </span>
          {friend.name}
        </li>
        <li>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>Email: </span>
          {friend.email}
        </li>
        <li>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Address:{" "}
          </span>
          {friend?.address?.city}
        </li>
      </ul>
    </div>
  );
};

export default FriendDetail;
