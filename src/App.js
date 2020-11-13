import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import Sub from './components/Sub';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 text-center">
                    <div class="container">
                            <div class="navbar-header">
                              <Link class="navbar-brand" to='/' >
                              <h1 className='one font-weight-bold text-capitalize'>
                              Weather App</h1></Link> 
                            </div>
                    </div>
          </nav>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route  path='/sub/:id' component={Sub}></Route>
  
      </Switch>
    </BrowserRouter>
    </div>
  )
}
