import React from "react";
import logo from "./moss.png";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import Globe from "./components/Globe";

function App() {
  return (
    <div className="App">
      <Header />
      <Globe/>
    </div>
  );
}

export default App;
