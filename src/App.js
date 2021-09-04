import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import './App.css';

function App() {
  return (
      <Router>
      <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/dashboard">
              <Dashboard />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
      </Switch>
      </Router>
  );
}

export default App;
