import Profile from "./Components/Profile";
import UserList from "./Components/UserList";
import UserState from "./Context/User/UserState";
function App() {
  return (
    <>
      <div>
        <UserState>
          <div className="container p-4">
            <h1 className="bg-info">React Context</h1>
            <div className="row">
              <div className="col-md-7">
                <UserList />
              </div>
              <div className="col-md-5">
                <Profile />
              </div>
            </div>
          </div>
        </UserState>
      </div>
    </>
  );
}

export default App;
