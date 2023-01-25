import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import  Contact  from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route
            exact
            path="/singleproduct"
            element={<SingleProduct />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
