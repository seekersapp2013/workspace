// stockinventory.js
import React, {Component} from 'react';


export default class stockinventory extends Component {
    render(){
        return (
            <main>
            <div className="record lg">
              <div className="block">
                <div className="block label">
                  <h3 className="text-center">Stock / Inventory</h3>
                </div>
                <div className="content">
                  <div>
                    <div className="set-view">
                    </div>
                    <div className="hr">
                      <hr />
                    </div>
                    <div>
                      <h5 className="span">List of Available Drugs in Stock</h5>
                      {/* Table Section */}
                      <div className="inventory-list">
                        <div className="table">
                          <div className="thead tr">
                            <span>S/N</span>
                            <span>Drug Names</span>
                            <span>Quantity Sold</span>
                            <span>Remaining Stock</span>
                            <span>Add To Cart</span>
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