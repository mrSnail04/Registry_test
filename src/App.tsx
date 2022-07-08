import React from "react";
import './App.module.scss';
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Login from "./pages/LoginFormLayout";
import {Routes, Route} from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="login" element={<Login/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>
  );
}

export default App;

