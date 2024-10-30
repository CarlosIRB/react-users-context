import { useContext, useEffect } from "react";
import UserContext from "../Context/User/UserContext";
import axios from "axios";
import Swal from "sweetalert2";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    const res = await axios.delete(`https://reqres.in/api/users/${id}`);
    console.log(res.data);
    Swal.fire({
      title: "Eliminado",
      icon: "error",
    });
  };

  return (
    <div className="list-group h-100">
      {users.map((user) => {
        return (
          <a
            key={user.id}
            href="#"
            onClick={() => getProfile(user.id)}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center flex-row"
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
            <button onClick={()=>deleteUser(user.id)} className="h-50 btn btn-outline-danger">
              Delete
            </button>
          </a>
        );
      })}
    </div>
  );
};

export default UserList;
