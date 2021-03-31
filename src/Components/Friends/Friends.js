import React from "react";

const Friends = (friend) => {
  const cart = friend.user;
  let salary = 0;
  for (let i = 0; i < cart.length; i++) {
    const friend = cart[i];
    salary = salary + friend.annual_salary;
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5>{cart.first_name + " " + cart.last_name}</h5>
          <p className="text-muted">Salary: {cart.annual_salary}</p>
        </div>
      </div>
      <p className="text-muted">{salary}</p>
    </div>
  );
};

export default Friends;
