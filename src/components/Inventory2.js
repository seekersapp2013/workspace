// Inventory2.js
import React, {Component} from 'react';


export default class Inventory2 extends Component {
    render(){
        return (
          <main>
          <div className="record lg">
            <div className="block">
              <div className="block label">
                <h3 className="text-center">Inventory</h3>
              </div>
              <div className="content">
                <div>
                  <div className="set-view">
                    <h4 className="span">Select Permission: </h4>
                    <select name="pharmacy" id="pharmacy" className="br-left">
                      <option value>Pharmacy</option>
                      <option value>Pharmacy Records Records</option>
                    </select>
                    <select name="pharmacy" id="pharmacy">
                      <option value> Year</option>
                    </select>
                    <select name="pharmacy" id="pharmacy">
                      <option value>Month</option>
                    </select>
                    <button className="br-right">View</button>
                  </div>
                  <div className="hr">
                    <hr />
                  </div>
                  <div>
                    {/* Table Section */}
                    <div className="inventory-list">
                      <div className="table">
                        <div className="thead tr">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div></div></main>
  
    
        );
    }
}