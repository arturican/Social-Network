import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {About} from "./components/About/About";
import {BrowserRouter,  Route, Routes,} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <div className='App-content'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<About/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='post' element={<Profile/>}/>
                    </Routes>

                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
