import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Patientreg from './components/patientreg';
import Patientdemo from './components/patientdemo';
import Patientdemoview from './components/patientDemoView';
import Accounting from './components/accounting';
import Reports from './components/reports';
import Pharmacy from './components/pharmacy';

import Billing from './components/billing';
import Drugcart from './components/drugcart';
import Patientdemo2 from './components/patientDemo2';
import Payment from './components/payment';

import Inventory from './components/Inventory';
import Inventory2 from './components/Inventory2';
import Income from './components/income';
import Stock from './components/stock';
import StockInventory from './components/stock-inventory';

import Patientvitals from './components/patientVitals';

import Collapsible from './components/collapsible';


function App() {
  return (
   
    <>
       <Router>
         
    <Header />
    <div>
           
      <aside>
      <div>
        <div className="account-section">
          <div className="label">
            <h4>T Hospital</h4>
          </div>
          <div className="hr">
            <hr />
          </div>
          <div className="account">
            <div>
              <div className="account-img" />
              <div className="account-info">
                <div>
                  <h3>Welcome</h3>
                </div>
                <div>
                  <p>Dr John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="309 78 188 65" width="100%" height="100%"><defs><path d="M307.92 77.11L496.92 77.11L496.92 143.11L307.92 143.11L307.92 77.11Z" id="b16ud992L1" /><path d="M307.92 143.11L496.92 143.11C483.73 122.94 452.23 113.22 402.42 113.96C352.6 114.69 321.1 102.41 307.92 77.11L307.92 143.11Z" id="adxrRUJv0" /></defs><g><g><use xlinkHref="#b16ud992L1" opacity={1} fill="#709cc9" fillOpacity={1} /></g><g><use xlinkHref="#adxrRUJv0" opacity={1} fill="#01396c" fillOpacity={1} /></g></g></svg>
        </div>
        <div className="nav-tabs">
          <ul>
            <li className="nav-tab active">
              <div>
                <i className="fas fa-home" />
                {/* <a href="index.html">Dashboard</a> */}
                <Link to="/">Dashboard</Link>
              </div>
            </li>
            <li className="nav-tab xmenu" data-toggled="false">
              <div>
                <i className="fas fa-user-friends" />
                {/* <a>Patient Registration</a> */}
                <Link to="/patientdemoview">Patient Registration</Link>

              </div>
              <ul className="xmenu-content">
                <li className="nav-tab">
                  {/* <a href="patient-demo-graphical-details.html">Patient Demo-graphical Details</a> */}
                  <Link to="/patientreg">Patient Demo-graphical Details</Link>
                </li>
                <li className="nav-tab">
                  {/* <a href="patient-vitals.html">Patient Vitals</a> */}
                  <Link to="/patientdemoview">Patient Vitals</Link>
                </li>
              </ul>
            </li>
            <li className="nav-tab">
              <div>
                <i className="fas fa-address-card" />
                {/* <a href="#">Accounting</a> */}
                <Link to="/accounting">Accounting</Link>
              </div>
            </li>
            <li className="nav-tab">
              <div>
                <i className="fas fa-folder-open" />
                {/* <a href="#">Reports</a> */}
                <Link to="/reports">Reports</Link>
              </div>
            </li>
            <li className="nav-tab">
              <div>
                <i className="fas fa-prescription-bottle-alt" />
                {/* <a href="#">Pharmacy</a> */}
                <Link to="/pharmacy">Pharmacy</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      
      <Route path="/patientreg">
          <Patientreg />
        </Route>

        <Route path="/patientdemo">
          <Patientdemo /> 
        </Route>

        <Route path="/patientdemoview">
          <Patientdemoview /> 
        </Route>

        <Route path="/accounting">
          <Accounting />  
        </Route>

        <Route path="/reports">
          <Reports />
        </Route>

        <Route path="/pharmacy">
          <Pharmacy /> 
        </Route>

        <Route path="/billing">
          <Billing /> 
        </Route>

        <Route path="/drugcart">
          <Drugcart /> 
        </Route>

        <Route path="/patientdemo2">
          <Patientdemo2 /> 
        </Route>
        
        <Route path="/payment">
          <Payment /> 
        </Route>
        
      <Route path="/inventory">
          <Inventory />
        </Route>

        <Route path="/inventory2">
          <Inventory2 />
        </Route>
        <Route path="/income">
          <Income />
        </Route>
        <Route path="/stock">
          <Stock />
        </Route>
        <Route path="/stockinventory">
          <StockInventory />
        </Route>

        <Route path="/patientvitals">
          <Patientvitals />
        </Route>

        <Route path="/collapsible">
          <Collapsible />
        </Route>

        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
  
    {/* <SideBar /> */}
    {/* <Main /> */}
    </>
  );
}

export default App;
