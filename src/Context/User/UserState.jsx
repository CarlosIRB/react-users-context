/*
Este archivo representa la definicion del estado, aqui estara toda la informacion que se va compartir 
*/
import UserReducer from "./UserReducer";
import axios from "axios";
import { useReducer } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  //definimos el estado inicial
  const initialState = {
    users: [],
    selectedUser: null,
  };
  //definimos useReducer para manejar el estado de la aplicacion
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await axios.get("https:/reqres.in/api/users");

    console.log(res.data.data);

    dispatch({
      type: "GET_USERS",
      payload: res.data.data,
    });
  };

  const getProfile = async (id) => {
    const res = await axios.get("https:/reqres.in/api/users/" + id);
    console.log(res.data.data);
    dispatch({
        type: "GET_PROFILE",
        payload: res.data.data,
    })
  };
  //todos los componentes de usercontext van a poder acceder al state
  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
