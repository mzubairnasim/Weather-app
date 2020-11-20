import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div>
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 text-center">
                          <div class="container">
                                  <div class="navbar-header">
                                    <Link class="navbar-brand" to='/' >
                                    <h1 className='one font-weight-bold text-capitalize'>
                                    Weather App</h1></Link> 
                                  </div>
                          </div>
                </nav>
        </div>
    )
}
