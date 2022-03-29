import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/Tuiter/expolore.css'
import HelloWorld from "./components/HelloWorld";
import Lab from "./components/Labs/index";
import ExploreScreen from "./components/Tuiter/Tuiter";
import HomeScreen from "./components/Tuiter/home-screen/index"
import Tuiter from "./components/Tuiter/index"
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route path="labs"
                             element={<Lab/>}/>
                      <Route path="hello"
                             element={<HelloWorld/>}/>
                      <Route path="tuiter"
                             element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path="explore"
                                 element={<ExploreScreen/>}/>
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;

