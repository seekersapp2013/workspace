// Inventory.js
import React, {Component} from 'react';


export default class Inventory extends Component {
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
                      <option value>2018</option>
                    </select>
                    <select name="pharmacy" id="pharmacy">
                      <option value>March</option>
                    </select>
                    <button className="br-right">View</button>
                  </div>
                  <div className="hr">
                    <hr />
                  </div>
                  <div>
                    <h5 className="span">List of drugs sold on March 2018</h5>
                    {/* Table Section */}
                    <div className="inventory-list">
                      <div className="table">
                        <div className="thead tr">
                          <span>S/N</span>
                          <span>Drug Names</span>
                          <span>Quantity Sold</span>
                          <span>Remaining Stock</span>
                        </div>
                        <div className="tr block">
                          <span>1</span>
                          <span>Tessy Amanda Rowland</span>
                          <span>09123466781</span>
                          <span>08012345678</span>
                        </div>
                        <div className="tr block">
                          <span>2</span>
                          <span>Tessy Nkechi Rowland</span>
                          <span>09123466781</span>
                          <span>08012345678</span>
                        </div>
                        <div className="tr block">
                          <span>3</span>
                          <span>Ade Bunmi Shola</span>
                          <span>07012456879</span>
                          <span>08012345678</span>
                        </div>
                        <div className="tr block">
                          <span>1</span>
                          <span>Tessy Amanda Rowland</span>
                          <span>09123466781</span>
                          <span>08012345678</span>
                        </div>
                        <div className="tr block">
                          <span>2</span>
                          <span>Tessy Nkechi Rowland</span>
                          <span>09123466781</span>
                          <span>08012345678</span>
                        </div>
                        <div className="tr block">
                          <span>3</span>
                          <span>Ade Bunmi Shola</span>
                          <span>07012456879</span>
                          <span>08012345678</span>
                        </div>
                        <div className="tr block">
                          <span>1</span>
                          <span>Tessy Amanda Rowland</span>
                          <span>09123466781</span>
                          <span>08012345678</span>
                        </div>
                        <div className="tr block">
                          <span>2</span>
                          <span>Tessy Nkechi Rowland</span>
                          <span>09123466781</span>
                          <span>08012345678</span>
                        </div>
                        <div className="tr block">
                          <span>3</span>
                          <span>Ade Bunmi Shola</span>
                          <span>07012456879</span>
                          <span>08012345678</span>
                        </div>
                        <div className="tr block">
                          <span>3</span>
                          <span>Ade Bunmi Shola</span>
                          <span>07012456879</span>
                          <span>08012345678</span>
                        </div>
                      </div>
                    </div>
                    {/* End Table Section */}
                    <div className="page-nav text-center">
                      <button className="br-left active">1</button>
                      <button className="br-none">2</button>
                      <button className="br-right">3</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      
        
        );
    }
}