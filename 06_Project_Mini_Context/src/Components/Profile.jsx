import React from "react";
import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = React.useContext(UserContext);
  if (!user) {
    return <div>Please login</div>;
  }
  return (
    <div>
      <h1>Profile</h1>
      <h2>
        Username: {user.username}
      </h2>
      <h2>
        Password: {user.password}
      </h2>
    </div>
  );
}

export default Profile;
