import { useContext } from "react";
import UserContext from "../Context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser != null ? (
        <div className="card card-body text-center">
            <img
              src={selectedUser.avatar}
              className="img-fluid rounded-circle m-auto card-img-top"
              style={{ width: "180px" }}
              alt=""
            />
            <h1>
              {selectedUser.first_name} {selectedUser.last_name}
            </h1>
            <p>Email: {selectedUser.email}</p>
          </div>
      ) : (
        <h1>No user selected</h1>
      )}
    </>
  );
};

export default Profile;
