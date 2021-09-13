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

function App() {
  return (
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
  );
}

export default App;
