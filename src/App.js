import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/service">
            <Services></Services>
          </Route>


          <Route path="/contact">
            <Contact></Contact>
          </Route>


          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
