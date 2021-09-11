import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Footer from "./components/Footer";
import TopBar from "./components/common/topBar/TopBar";
import Write from "./pages/write/Write.js";
import Settings from "./pages/settings/Settings.js";
import Single from "./pages/single/Single.js";
import Home from "./pages/home/Home.js";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          
          {user ? <Single /> : <Register />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
