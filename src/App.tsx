import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {About} from "./components/About/About";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {state} from "./Redux/state";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <div className='App-content'>
                    <Routes>
                        <Route path='/' element={<About/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='post' element={<Profile state={state.profilePage}/>}/>
                        <Route path='messages' element={<Dialogs state={state.dialogPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
