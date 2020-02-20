// Dashboard.js
import React, {Component} from 'react';

export default class Dashboard extends Component {
    render(){
        return (
            <main>
            <div className="home">
              <div className="main-section">
                {/* Panel Section */}
                <div className="block panel" style={{backgroundImage: 'url("img/banner.jpeg")'}}>
                  <div>
                    <p>Welcome</p>
                  </div>
                  <div>
                    <h2 className="label">Dr Stanley Azubuike</h2>
                  </div>
                  <hr />
                  <div>
                    <p>Eat veges always</p>
                  </div>
                </div>
                {/* End Panel Section */}
                {/*  */}
                <div className="block section-2">
                  <div>
                    <h6 className="title">Number of patients attended to</h6>
                    <h6 className="sub-title">Today</h6>
                    <h1>03</h1>
                    <button className="view-details">View Details</button>
                  </div>
                  <div>
                    <h6 className="title">Available Doctor</h6>
                    <h6 className="sub-title">Today</h6>
                    <h1>11</h1>
                    <button className="view-details">View Details</button>
                  </div>
                  <div>
                    <h6 className="title">Awaiting Doctor Appointment</h6>
                    <h6 className="sub-title">Today</h6>
                    <h1>51</h1>
                    <button className="view-details">View Details</button>
                  </div>
                </div>
                {/* 3 Card Section */}
                <div className="section-3">
                  <div className="block">
                    <h1>05</h1>
                    <h6>Top Selling Drugs</h6>
                  </div>
                  <div className="block">
                    <h1>09</h1>
                    <h6>Low Stock [Drugs]</h6>
                  </div>
                  <div className="block">
                    <h1>N 10146</h1>
                    <h6>How Much Generated Today</h6>
                  </div>
                </div>
                {/* End 3 Card Section */}
                {/* Table Section */}
                <div className="section-4">
                  <div className="label">
                    <h5>Names/Number of Patients Attended</h5>
                  </div>
                  <div className="table">
                    <div className="thead tr block">
                      <span>S/N</span>
                      <span>Names</span>
                      <span>Phone Number</span>
                    </div>
                    <div className="tr block">
                      <span>1</span>
                      <span>Tessy Amanda Rowland</span>
                      <span>08012345678</span>
                    </div>
                    <div className="tr block">
                      <span>2</span>
                      <span>Tessy Nkechi Rowland</span>
                      <span>09123466781</span>
                    </div>
                    <div className="tr block">
                      <span>3</span>
                      <span>Ade Bunmi Shola</span>
                      <span>07012456879</span>
                    </div>
                  </div>
                </div>
                {/* End Table Section */}
              </div>
              <div>
                <div className="block appointments">
                  <div className="label">
                    <p>January (2019)</p>
                  </div>
                  <div>
                    <hr />
                  </div>
                  <div className="sub-label">
                    <p>3 Appointments</p>
                  </div>
                  <div className="list">
                    <div className="block appointment">
                      <p>Adeyemi Williams</p>
                      <span>9:00am to 11:00pm, 20th January, 2019</span>
                    </div>
                    <div className="block appointment">
                      <p>Adedeji Williams</p>
                      <span>9:00am to 11:00pm, 20th January, 2019</span>
                    </div>
                    <div className="block appointment">
                      <p>Kingsley Obinna</p>
                      <span>9:00am to 11:00pm, 20th January, 2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
    
        );
    }
}