import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {About} from "./components/About/About";
import {BrowserRouter, HashRouter, Route, Routes,} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <div className='App-content'>
                    <Route path='/' element={<About/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='post' element={<Profile/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
