// drugCart.js
import React, {Component} from 'react';


export default class drugCart extends Component {
    render(){
        return (
       <div>
        <main>
          <div className="list sm">
            <div className="block">
              <div>
                <svg width={480} height={55} viewBox="0 0 480 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5C0 2.23857 2.23858 0 5 0H431C431 0 364 41 215.5 20.5C67 0 0 55 0 55V5Z" fill="#D2E9FF" />
                </svg>
              </div>
              <div className="label text-center">
                <i className="fas fa-cart-plus" />
                <h3 className="text-inline">Drug cart</h3>
                <span className="badge">3</span>
              </div>
              <div className="content">
                <div>
                  {/* Table Section */}
                  <div className="stock-list">
                    <div className="table">
                      <div className="thead tr">
                        <span>S/N</span>
                        <span>Drug</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Action</span>
                      </div>
                      <div className="tr block">
                        <span>1</span>
                        <span>Paracetamol</span>
                        <span>3</span>
                        <span>N 300</span>
                        <span>
                          <i className="fas fa-prescription-bottle-alt" />
                        </span>
                      </div>
                      <div className="tr block">
                        <span>2</span>
                        <span>Ibuprofen</span>
                        <span>3</span>
                        <span>N 1300</span>
                        <span>
                          <i className="fas fa-prescription-bottle-alt" />
                        </span>
                      </div>
                      <div className="tr block">
                        <span>3</span>
                        <span>Amoxil</span>
                        <span>2</span>
                        <span>N 1000</span>
                        <span>
                          <i className="fas fa-prescription-bottle-alt" />
                        </span>
                      </div>
                      <div className="thead tr">
                        <span />
                        <span>Total</span>
                        <span />
                        <span>N1600</span>
                        <span />
                      </div>
                    </div>
                  </div>
                  {/* End Table Section */}
                  <div className="text-right">
                    <button className="button-lg no-fill">Pay with Cash</button>
                    <button className="button-lg fill">Pay with Card</button>
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
              <p>Drug is still save in cart...</p>
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
              <p>Are you sure you want to delete drug from your cart?</p>
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
              <p>Drugs was successfully deleted from cart...</p>
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