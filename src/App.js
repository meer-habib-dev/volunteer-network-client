import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import AddEvent from "./Components/Pages/AddEvent/AddEvent";
import Admin from "./Components/Pages/Admin/Admin";
import Header from "./Components/Pages/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import NotFound from "./Components/Pages/NotFound/NotFound";
import RegisteredUser from "./Components/Pages/RegisteredUser/RegisteredUser";
import UserProfile from "./Components/Pages/UserProfile/UserProfile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/donation">
            <UserProfile></UserProfile>
          </Route>
          <Route path="/event">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/users">
            <RegisteredUser></RegisteredUser>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
