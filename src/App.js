import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/Tuiter/expolore.css'
import HelloWorld from "./components/HelloWorld";
import Lab from "./components/Labs/index";
import ExploreScreen from "./components/Tuiter/Tuiter";
import HomeScreen from "./components/Tuiter/HomeScreen/Home"

import {BrowserRouter, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Route path="/hello" exact={true}>
              <HelloWorld/>
          </Route>
          <Route path={["/", "/labs"]} exact={true}>
              <Lab/>
          </Route>
          <Route path="/tuiter" exact={true} component={HomeScreen}/>
          <Route path="/tuiter/home" component={HomeScreen}/>
          <Route path="/tuiter/explore" component={ExploreScreen}/>
      </div>
      </BrowserRouter>
  );
}
export default App;

