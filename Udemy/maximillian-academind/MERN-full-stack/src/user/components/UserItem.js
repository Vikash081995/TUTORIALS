import React from "react";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="user-item_info">
          <h2>{props.name}</h2>
          <h2>
            {props.placeCount} {props.placeCount === 1 ? "Palce" : "Places"}
          </h2>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
