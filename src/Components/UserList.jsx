import { useContext, useEffect } from "react";
import UserContext from "../Context/User/UserContext";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => {
        return (
          
            <a
              href="#"
              key={user.id}
              onClick={() => getProfile(user.id)}
              className="list-group-item list-group-item-action d-flex justify-content-start flex-row"
            >
              <img
                src={user.avatar}
                className="img-fluid mr-4 rounded-circle "
                width="70"
                alt=""
              />
              <p>
                {user.first_name} {user.last_name}
              </p>
            </a>
          
        );
      })}
    </div>
  );
};

export default UserList;
