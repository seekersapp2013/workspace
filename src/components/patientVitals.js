// patientVitals.js
import React, {Component} from 'react';



export default class patientVitals extends Component {
    render(){
        return (
              <main>
        <div className="form">
          <div className="block">
            <div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="51 368 520 75" width="100%" height="100%"><defs><path d="M49.42 367.4L521.01 367.4C516.01 369.27 486.84 371.32 433.51 373.54C353.51 376.87 169.34 382.71 146.01 386.04C122.68 389.37 106.84 395.21 90.18 404.4C79.06 410.53 65.48 421.91 49.42 438.54L49.42 367.4Z" id="b5xxYBa8wW" /><path d="M49.42 367.4L565.42 367.4L565.42 438.54L49.42 438.54L49.42 367.4Z" id="aObWTSjsz" /></defs><g><g><use xlinkHref="#b5xxYBa8wW" opacity={1} fill="#d2eaff" fillOpacity={1} /></g><g><use xlinkHref="#aObWTSjsz" opacity={1} fill="#36536c" fillOpacity={0} /></g></g></svg>
            </div>
            <div className="header">
              <h3 className="text-center">Patients Vitals</h3>
            </div>
            <div className="content">
              <form>
                <p className="note">Fields with * are required</p>
                <div className="inputs-group">
                  <div className="input-control grid-col-12">
                    <label htmlFor="patient-id">Patient ID *</label>
                    <input type="text" name="patient-id" id="patient-id" required autoFocus />
                  </div>
                  <div className="input-control grid-col-6">
                    <label htmlFor="pulse">Pulse *</label>
                    <input type="text" name="pulse" id="pulse" required />
                  </div>
                  <div className="input-control grid-col-6">
                    <label htmlFor="blood-pressure">Blood Pressure *</label>
                    <input type="text" name="blood-pressure" id="blood-pressure" required />
                  </div>
                  <div className="input-control grid-col-12">
                    <label htmlFor="weight">Weight</label>
                    <input type="text" name="weight" id="weight" />
                  </div>
                  <div className="input-control grid-col-12">
                    <label htmlFor="height">Height</label>
                    <input type="text" name="height" id="height" />
                  </div>
                  <div className="input-control grid-col-12">
                    <label htmlFor="blood-group">Blood Group</label>
                    <input type="text" name="blood-group" id="blood-group" />
                  </div>
                  <div className="input-control grid-col-12">
                    <label htmlFor="genotype">Genotype</label>
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

        );
    }
}