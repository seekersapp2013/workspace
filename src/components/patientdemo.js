// patientdemo.js
import React, {Component} from 'react';


export default class patientDemo extends Component {
    render(){
        return (
            <div>
            <main>
              <div className="form">
                <div className="block">
                  <div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="51 368 520 75" width="100%" height="100%"><defs><path d="M49.42 367.4L521.01 367.4C516.01 369.27 486.84 371.32 433.51 373.54C353.51 376.87 169.34 382.71 146.01 386.04C122.68 389.37 106.84 395.21 90.18 404.4C79.06 410.53 65.48 421.91 49.42 438.54L49.42 367.4Z" id="b5xxYBa8wW" /><path d="M49.42 367.4L565.42 367.4L565.42 438.54L49.42 438.54L49.42 367.4Z" id="aObWTSjsz" /></defs><g><g><use xlinkHref="#b5xxYBa8wW" opacity={1} fill="#d2eaff" fillOpacity={1} /></g><g><use xlinkHref="#aObWTSjsz" opacity={1} fill="#36536c" fillOpacity={0} /></g></g></svg>
                  </div>
                  <div className="header">
                    <h3 className="text-center">Patient Demo-graphical Details</h3>
                  </div>
                  <div className="content">
                    <form>
                      <p className="note">Fields with * are required</p>
                      <div className="inputs-group">
                        <div className="input-control grid-col-12">
                          <label htmlFor="firstname">Firstname *</label>
                          <input type="text" name="firstname" id="firstname" required autofocus />
                        </div>
                        <div className="input-control grid-col-12">
                          <label htmlFor="lastname">Lastname *</label>
                          <input type="text" name="lastname" id="lastname" required />
                        </div>
                        <div className="input-control grid-col-12">
                          <label htmlFor="home-address">Home address *</label>
                          <input type="text" name="home-address" id="home-address" required />
                        </div>
                        <div className="input-control grid-col-12">
                          <label htmlFor="email">Email</label>
                          <input type="email" name="email" id="email" />
                        </div>
                        <div className="input-control grid-col-12">
                          <label htmlFor="phone">Phone number *</label>
                          <input type="tel" name="phone" id="phone" required />
                        </div>
                        <div className="input-control grid-col-12">
                          <label htmlFor="phone2">Phone number 2 (Optional)</label>
                          <input type="tel" name="phone2" id="phone2" />
                        </div>
                        <div className="input-control grid-col-12 no-focus">
                          <label htmlFor="date-of-birth">Date of birth *</label>
                          <div className="input date-input datePicker">
                            <input type="text" className="date" name="date-of-birth" id="date-of-birth" required />
                            <div className="input-i">
                              <i className="far fa-calendar" />
                            </div>
                          </div>
                          <div className="pickDate calender" />
                        </div>
                        <div className="input-control grid-col-12 no-focus">
                          <label htmlFor="gender">Gender *</label>
                          <div>
                            <input type="radio" name="gender" id="male" />
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" />
                            <label htmlFor="female">Female</label>
                          </div>
                        </div>
                        <div className="input-control grid-col-12">
                          <label htmlFor="genotype">Employer</label>
                          <input type="text" name="genotype" id="genotype" />
                        </div>
                        <div className="input-control grid-col-12">
                          <label htmlFor="genotype">Insurance Information (HMO/NHIS) *</label>
                          <input type="text" name="genotype" id="genotype" />
                        </div>
                        <div className="input-control grid-col-12">
                          <input type="submit" name="submit" id="submit" defaultValue="Save" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
            <button id="myBtn">Show Modal</button>
            <div id="myModal" className="modal">
              <div id="content">
                <span id="close">×</span>
                <div id="body" />
              </div>
            </div>
          </div>
    

        );
    }
}