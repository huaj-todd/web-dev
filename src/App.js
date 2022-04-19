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

import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/"
                         exact={true}
                         element={<Lab/>}/>
                  <Route path="/tuiter"
                         exact={true}
                         element={<ExploreScreen/>}/>
                  <Route path="/tuiter/home" element={<HomeScreen/>}/>
                  <Route path="/tuiter/explore" element={<ExploreScreen/>}/>

              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;

