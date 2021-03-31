import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Users = (props) => {
  const user = props.user;
  const fullName = user.first_name + " " + user.last_name;
  return (
    <div className="col-md-3 mt-3">
      <div className="card">
        <img src={user.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{fullName}</h3>
          <p className="card-text">{user.gender}</p>
          <p className="card-text">Annual Salary: {user.annual_salary}</p>
          <p className="card-text text-muted">{user.email}</p>

          <button
            className="btn btn-primary"
            title="Add to friend"
            onClick={() => props.AddToFriend(user)}
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
