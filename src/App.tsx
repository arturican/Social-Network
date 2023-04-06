import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {About} from "./components/About/About";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {StoreType} from "./Redux/store";


type AppType = {
    store: any
}

const App: React.FC<AppType> = (props) => {

    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <div className='App-content'>
                    <Routes>
                        <Route path='/' element={<About/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='post' element={<Profile state={state.profilePage}
                                                             dispatch={props.store.dispatch.bind(props.store)}
                                                             /*addPost={props.store.addPost.bind(props.store)}
                                                             updateNewPostText={props.store.updateNewPostText.bind(props.store)}*/
                        />}/>
                        <Route path='messages' element={<Dialogs state={state.dialogPage}
                                                                 dispatch={props.store.dispatch.bind(props.store)}
                        />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
