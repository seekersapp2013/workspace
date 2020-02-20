// stock.js
import React, {Component} from 'react';


export default class stock extends Component {
    render(){
        return (
            <div>
            <main>
              <div className="record lg">
                <div className="block">
                  <div className="block label">
                    <h3 className="text-center">Stock/Drugs</h3>
                  </div>
                  <div className="content">
                    <div>
                      <div className="set-view">
                        <input type="text" name="stock-name" id="stock-name" className="br-left" placeholder="Stock Name" />
                        <input type="text" name="stock-name" id="stock-amount" className="br-none" placeholder="Amount" />
                        <input type="text" name="stock-name" id="stock-quantity" className="br-none" placeholder="Quantity" />
                        <button className="br-right">ADD</button>
                      </div>
                      <div className="hr">
                        <hr />
                      </div>
                      <div>
                        <h5 className="span">List of available stock</h5>
                        {/* Table Section */}
                        <div className="stock-list">
                          <div className="table">
                            <div className="thead tr">
                              <span>S/N</span>
                              <span>Stock/Drug</span>
                              <span>Price</span>
                              <span>Quantity</span>
                              <span>Action</span>
                            </div>
                            <div className="tr block">
                              <span>1</span>
                              <span>AmoxicillinT</span>
                              <span>09123466781</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
                            </div>
                            <div className="tr block">
                              <span>2</span>
                              <span>Tessy Nkechi Rowland</span>
                              <span>09123466781</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
                            </div>
                            <div className="tr block">
                              <span>3</span>
                              <span>Ade Bunmi Shola</span>
                              <span>07012456879</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
                            </div>
                            <div className="tr block">
                              <span>1</span>
                              <span>Tessy Amanda Rowland</span>
                              <span>09123466781</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
                            </div>
                            <div className="tr block">
                              <span>2</span>
                              <span>Tessy Nkechi Rowland</span>
                              <span>09123466781</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
                            </div>
                            <div className="tr block">
                              <span>3</span>
                              <span>Ade Bunmi Shola</span>
                              <span>07012456879</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
                            </div>
                            <div className="tr block">
                              <span>1</span>
                              <span>Tessy Amanda Rowland</span>
                              <span>09123466781</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
                            </div>
                            <div className="tr block">
                              <span>2</span>
                              <span>Tessy Nkechi Rowland</span>
                              <span>09123466781</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
                            </div>
                            <div className="tr block">
                              <span>3</span>
                              <span>Ade Bunmi Shola</span>
                              <span>07012456879</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
                            </div>
                            <div className="tr block">
                              <span>3</span>
                              <span>Ade Bunmi Shola</span>
                              <span>07012456879</span>
                              <span>08012345678</span>
                              <span>
                                <i className="fas fa-prescription-bottle-alt" />
                              </span>
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
            <button id="modalX" className="modal-button" data-target="errorModal">Show Modal X</button>
            <button id="modalWarning" className="modal-button" data-target="warningModal">Show Modal Warning</button>
            <button id="modalSuccess" className="modal-button" data-target="successModal">Show Modal Success</button>
            {/* <button id="myBtn" class="modal-button" data-target="myModal">Modal</button> */}
            <div id="errorModal" className="modal">
              <div id="content" className="modal-sm">
                <div className="modal-icon text-center">
                  <svg width={91} height={91} viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x={22} y="66.6689" width={63} height={3} rx="1.5" transform="rotate(-45 22 66.6689)" fill="#D9534F" />
                    <rect x={67} y="68.6689" width={63} height={3} rx="1.5" transform="rotate(-135 67 68.6689)" fill="#D9534F" />
                    <circle cx="45.5" cy="45.5" r={44} stroke="#D9534F" strokeWidth={3} />
                  </svg>
                </div>
                <div className="modal-head text-center">
                  <h2>Cancelled !!!</h2>
                </div>
                <div className="modal-messages text-center">
                  <p>Stock/Drug is still save on your list...</p>
                </div>
                <div className="modal-btn text-center">
                  <button className="close">Ok</button>
                </div>
              </div>
            </div>
            <div id="warningModal" className="modal">
              <div id="content" className="modal-md">
                <div className="modal-icon text-center">
                  <svg width={91} height={91} viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="45.5" cy="45.5" r="43.5" stroke="#F8BE86" strokeWidth={4} />
                    <rect x={44} y={11} width={5} height={58} rx="2.5" fill="#F8BE86" />
                    <circle cx="46.5" cy="78.5" r="2.5" fill="#F8BE86" />
                  </svg>
                </div>
                <div className="modal-messages text-center bold">
                  <p>Are you sure you want to delete stock/drug from the list?</p>
                </div>
                <div className="modal-btn text-center">
                  <button className="prompt no-fill close">No, cancel pls...</button>
                  <button className="prompt">Yes, delete it!</button>
                </div>
              </div>
            </div>
            <div id="successModal" className="modal">
              <div id="content" className="modal-sm">
                <div className="modal-icon text-center">
                  <svg width={91} height={91} viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="45.5" cy="45.5" r={44} stroke="#00B312" strokeOpacity="0.5" strokeWidth={3} />
                    <path d="M60.1315 30.8366C54.9157 35.3508 50.5029 39.6479 46.463 45.2544C44.6813 47.7272 42.6999 50.6378 41.4048 53.3857C40.6654 54.8428 39.3326 57.1197 38.8782 59.3087C36.393 56.9966 33.7236 54.3723 30.9923 52.3168C29.0456 50.8523 23.4385 53.8382 25.7209 55.5556C29.8116 58.6324 33.2136 62.4647 37.1923 65.6787C38.8566 67.0215 42.5448 64.1054 43.4115 62.882C46.2565 58.8513 46.6453 53.9241 48.7188 49.5275C51.8846 42.8032 57.4992 37.2796 63.0426 32.4829C66.7154 29.0574 62.9221 28.4256 60.1371 30.8366" fill="#37B34A" />
                  </svg>                    
                </div>
                <div className="modal-head text-center">
                  <h2>Deleted !!!</h2>
                </div>
                <div className="modal-messages text-center">
                  <p>Stock/Drug was successfully deleted from the list...</p>
                </div>
                <div className="modal-btn text-center">
                  <button className="close">Ok</button>
                </div>
              </div>
            </div>
          </div>
    
        );
    }
}