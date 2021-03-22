import React,{useState} from "react";
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
// Video left at 2:33:00 Just finished footer

function App() {
  const [{user},dispatch] = useStateValue();

  return (
    <div className="App">
       {!user ? (
         <Login/>
       ):(<div className="app_body">
       <Router>
       <Switch>
       

       <Route path="/rooms/:roomId">
       <Sidebar />
       <Chat />
       </Route>
       <Route path="/">
       <Sidebar />

       </Route>

       </Switch>
       </Router>
      
    </div>)}
       
      
    </div>
  );
}

export default App;
