import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/detail" element={<Details />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
