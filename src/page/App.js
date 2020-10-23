import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route,  Link } from "react-router-dom";
import { Provider } from 'react-redux';
import storeApp from '../config/redux/store/storeApp'
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Review from "./review-product";
import About from "./about";
import Ketentuan from "./ketentuan";
import Product from "./detail-product";
// import Playground from "./playground/playground"

 
function App() {
  return (
    <div className="App">
      
      <Provider store={storeApp}>
        <Router>
          <div>
            {/* link antar yang digunakan untuk memindahkan antar halaman */}
            <nav>
              <ul>
                <li>  <Link to="/">Home</Link>   </li>
                <li>  <Link to="/login">Login</Link> </li>
                <li>  <Link to="/register">Register</Link>   </li>
                <li>  <Link to="/detail-product">Product</Link>   </li> 
                <li>  <Link to="/about">About</Link>   </li>
                <li>  <Link to="/syarat-ketentuan">Syarat dan Ketentuan</Link> </li>
                <li>  <Link to="/review">Review</Link>   </li>
                {/* <li>  <Link to="/playground">Playground</Link>   </li> */}
              </ul>
            </nav>

            <div className="clear"></div>

            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/detail-product" component={Product} /> 
            <Route path="/about" component={About} />
            <Route path="/syarat-ketentuan" component={Ketentuan} />
            <Route path="/review" component={Review} /> 
            {/* <Route path="/playground" component={Playground} /> */}


            {/* untuk memindahkan antar halaman ==> <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            {/* <Switch>
              <Route path="/about"> <About /> </Route>
              <Route path="/users">  <Users />  </Route>
              <Route path="/">  <Home />  </Route>
            </Switch> */}
            
          </div>
        </Router>
      </Provider>

     </div>
  );
}

export default App;
