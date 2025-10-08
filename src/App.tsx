import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import ListGroup from "./components/ListGroup";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
