import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/alertState";
import {GitHubState} from "./context/github/githubState";


function App() {
  return (
      <GitHubState>
      <AlertState>
      <Router>
          <Navbar />
          <div className="container pt-4">
              <Alert />
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/profile/:name" component={Profile}/>
              </Switch>
          </div>
      </Router>
      </AlertState>
      </GitHubState>
  );
}

export default App;
