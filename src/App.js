import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Auth from './pages/Auth';
import './App.css';
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import { Provider } from "react-redux";
import store from "./store";
import {useEffect} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebaseConfig";
import {useHistory} from "react-router-dom";

function App() {

    const [user, loading] = useAuthState(auth);

  return (
    <Provider store={store} >
    <ThemeProvider theme={theme}>
      <Router>
      <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/dashboard">
              <Dashboard />
          </Route>
          <Route path="/auth">
              <Auth />
          </Route>
      </Switch>
      </Router>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
