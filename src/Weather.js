import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Days5Wea from './weatherComp/Days5Wea'
import Home from './weatherComp/Home';
import MainWea from './weatherComp/MainWea'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Switch>
        <Route exact path='/' component={MainWea}></Route>
        {/* <Route exact path='/' component={Home}></Route> */}
        <Route  path='/days/:id' component={Days5Wea}></Route>
  
      </Switch>
    </BrowserRouter>
    </div>
  )
}
