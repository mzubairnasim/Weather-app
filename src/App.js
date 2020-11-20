import React from 'react'
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Main from './components/Main';
import Sub from './components/Sub';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
export default function App() {
  return (
    <div>
      <BrowserRouter>  
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route  path='/sub/:id' component={Sub}></Route>
      </Switch>
    </BrowserRouter>
    </div>
  )
}
