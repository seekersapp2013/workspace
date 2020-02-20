// Header.js
import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <nav>
            <div>
              <div>
                <button className="search">
                  <i className="fas fa-search" />
                </button>
                <button className="nav-button">Edit Profile</button>
                <button className="nav-button fill">Sign out</button>
              </div>
              <div>
                <p className="nav-title">Dashboard</p>
              </div>
            </div>
          </nav>
    
    
        )
    }
}