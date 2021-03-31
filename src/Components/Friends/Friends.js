import React from "react";

const Friends = (friend) => {
  const cart = friend.user;
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5>{cart.first_name + " " + cart.last_name}</h5>
          <p className="text-muted">Salary: {cart.annual_salary}</p>
        </div>
      </div>
    </div>
  );
};

export default Friends;
