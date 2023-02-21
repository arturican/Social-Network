import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {About} from "./components/About/About";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {RootType} from "./Redux/state";



type AppType = {
    state: RootType
    addPost: (newPost: string)=> void
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <div className='App-content'>
                    <Routes>
                        <Route path='/' element={<About/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='post' element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path='messages' element={<Dialogs state={props.state.dialogPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
