import React, { Component } from "react";
import './PatientDetails.css';
import profilePic from "../../assets/prof.png";
import editIcon from './../../assets/svg/edit.svg';
import docGraph from './../../assets/doc-graph.png';
import PatientHistory from "../../components/patientHistory/patientHistory";
import Prescription from "../../components/prescription/prescription";
import {Link, generatePath} from "react-router-dom";


class PatientDetails extends Component{
    constructor(){
        super()
        this.state={
            page:'progress'
        }
    }

    setPage(event,page){
        this.setState({page});
        document.querySelector('.active').classList.remove('active');
        console.log(event.target)
        event.target.classList.add('active')
    }

    setDisplay(){
        let {page} = this.state
        if(page==='progress'){
            return <div className="progress-div">
                    <div className="history">
                        <div className="head-container">
                            <h4>HISTORY</h4>
                        </div>
                        <PatientHistory symptom="Dry Cough" date= "28/05/12" />
                        <PatientHistory symptom="Mild Cough" date= "24/07/22" />
                    </div>

                    <div className="prescriptions">
                        <div className="head-container">
                            <h4>PRESCRIPTIONS</h4>
                            <Link to="/add-prescription"><img src={editIcon} alt='edit icon' /></Link>
                            
                        </div>
                        <div className="drugs">
                            <div className="head-container2">
                                <h4>DRUGS</h4>
                                <h4>DOSAGE</h4>
                            </div>
                            <Prescription />
                            <Prescription />
                        </div>
                    </div>
                    <div className="body-temp">
                        <div className="head-container">
                            <h4>BODY TEMPERATURE</h4>
                        </div>
                        <img src={docGraph} alt='graph' />
                    </div>
                </div>
                
        }
        if(page==='info'){
            return <div className="information-div">
            <div className="patient-info patient-name">
                <h3 className="title">Name: </h3>
            </div>
            <div className="patient-info patient-gender">
                <h3 className="title">Gender: </h3>
            </div>
            <div className="patient-info patient-home-address">
                <h3 className="title">Home Address: </h3>
            </div>
            <div className="patient-info patient-phone-number">
                <h3 className="title">Phone Number: </h3>
            </div>
            <div className="patient-info patient-email">
                <h3 className="title">Email: </h3>
            </div>
            <div className="patient-info patient-age">
                <h3 className="title">Age: </h3>
            </div>
        </div>
        }
    }

    render(){
        return (
            <div className="PatientDetails">
                <div className="Pcontainer">
                    <header className='patient-details-header'>
                        <div className="Pbanner">
                            <h2>Patient's Details</h2>
                            <img src={profilePic} alt="img"/>
                            <h3>Paul Okoye</h3>
                        </div>

                        <div className="Pswitch">
                            <h4 onClick={e=>this.setPage(e,'progress')} className="Pprog active">PROGRESS</h4>
                            <h4 onClick={e=>this.setPage(e,'info')} className="Pinfo">INFORMATION</h4>
                        </div>
                    </header>
                    
                    <div className="Pdisplay">
                        {this.setDisplay()}
                    </div>

                    </div>
            
        </div>
        );
    }

}
export default PatientDetails;