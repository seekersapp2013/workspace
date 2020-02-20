//patientDemoView.js
import React, {Component} from 'react';


export default class patientDemoView extends Component {
    render(){
        return (
            
      <main>
      <div className="record sm">
        <div className="block">
          <div className="block label">
            <h3 className="text-center">Hospital Name</h3>
          </div>
          <div className="content">
            <div>
              <h4 className="text-center">Patient Demo-graphical Record</h4>
              <p>Name: John Doe</p>
              <p>Address: No. 3 Abcdefgbhgbb lane, good things estate, live well, green state, xyz.</p>
              <p>Phone number: 0123456789954</p>
              <p>Phone number 2: 98765432102585</p>
              <p>Date of birth: 15/12/1912</p>
              <p>Gender: Female</p>
              <p>Employer: abcxyz company limited</p>
              <p>Insurance information: Goody bag HMO</p>
              <p>Patient Record ID: A1234567</p>
              <hr />
              <p><b>Note</b> that Patient ID is A1234567, use this ID on patient bio-metrics details page</p>
              <p>Click <a href="#">Here</a> to fill patient bio-metrics details</p>
              <button className="button">Print</button>
            </div>
          </div>
        </div>
      </div>
    </main>

        );
    }
}