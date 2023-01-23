import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {Profile} from "./components/Profile";

const  App = () => {
  return (
    <div className="App">
         <Header />
         <Sidebar />
         <Profile />

    </div>
  );
}

export default App;
