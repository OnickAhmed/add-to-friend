import { useState } from "react";
import "./App.css";
import Friends from "./Components/Friends/Friends";
import Users from "./Components/Users/Users";
import fakeData from "./fakeData/fakeData.json";

function App() {
  const first15 = fakeData.slice(0, 15);
  const [friends, setFriends] = useState([]);
  const AddToFriend = (user) => {
    const friend = [...friends, user];
    setFriends(friend);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <div className="row">
            {first15.map((user) => (
              <Users user={user} AddToFriend={AddToFriend}></Users>
            ))}
          </div>
        </div>
        <div className="col-md-2">
          <div className="mt-3">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary btn-sm btn-block"
              >
                Friends{" "}
                <span className="badge badge-light">{friends.length}</span>
                <span className="sr-only">unread messages</span>
              </button>
            </div>
            {friends.map((user) => (
              <Friends user={user}></Friends>
            ))}
            <hr />
            <p className="text-muted">
              Total Salary:{" "}
              {friends.reduce(
                (sum, user) => sum + parseInt(user.annual_salary),
                0
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
