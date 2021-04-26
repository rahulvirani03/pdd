import React, { Component } from 'react'
import {Button} from '@material-ui/core'
import {Form, Col} from 'react-bootstrap'
import '../styles/Diagnosis.css'
import { red } from '@material-ui/core/colors'

export default class Diagnosis extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             phoneno:"",
             email:"",
             dob:"",
             addr:"",
             city:"",
             indiaState:"choose",
             zip:"",
             uploadFile:"",
             nameError:"",
             phoneNoError:"",
             emailError:"",
             dobError:"",
             addrError:"",
             cityError:"",
             indiaStateError:"",
             zipError:"",
             uploadFileError:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange = (event) => {
        this.setState ({
            name: event.target.value
        })
    };
    handlePhoneNoChange = (event) => {
        this.setState ({
            phoneno: event.target.value
        })
    };
    handleEmailChange = (event) => {
        this.setState ({
            email: event.target.value
        })
    };
    handleDobChange = (event) => {
        this.setState ({
            dob: event.target.value
        })
    };
    handleAddrChange = (event) => {
        this.setState ({
            addr: event.target.value
        })
    };
    handleCityChange = (event) => {
        this.setState ({
            city: event.target.value
        })
    };
    handleIndiaStateChange = (event) => {
        this.setState ({
            indiaState: event.target.value
        })
    };
    handleZipChange = (event) => {
        this.setState ({
            zip: event.target.value
        })
    };
    handleUploadFileChange = (event) => {
        this.setState ({
            uploadFile: event.target.value
        })
    };

    handleSubmit = event => {
        if(!(new RegExp(/^(?:[A-Za-z]+)$/.test(this.state.name)))){
            this.setState({
                nameError: "Invalid name",
                name:"",
            });
            event.preventDefault()
        }
        if((new RegExp(/^(?:[A-Za-z]+)$/.test(this.state.phoneno)))){
            this.setState({
                phoneNoError: "Invalid number",
                phoneno:"",
            });
            event.preventDefault()
        }
        if((new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email))){
            this.setState({
                emailError: "Invalid email",
                email:"",
            });
            event.preventDefault()
        }
        if(!(new RegExp(/^(?:[A-Za-z]+)$/.test(this.state.city)))){
            this.setState({
                cityError: "Invalid city",
                city:"",
            });
            event.preventDefault()
        }
        if(this.state.indiaState==="choose"){
            this.setState({
                indiaStateError: "Select a state",
                indiaState:"choose",
            });
            event.preventDefault()
        }
        if((new RegExp(/^(?:[A-Za-z]+)$/.test(this.state.zip)))){
            this.setState({
                zipError: "Invalid number",
                zip:"",
            });
            event.preventDefault()
        }
        // if(this.state.uploadFile===""){
        //     this.setState({
        //         uploadFileError: "Select a file",
        //         uploadFile:"",
        //     });
        //     event.preventDefault()
        // }
    }
    render() {
        return (
            <div className="Diagnosis">
                <br/>
                <h2>Patient Details</h2>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Patient's Name" required value={this.state.name} onChange={this.handleNameChange}/>
                        <Form.Text style={{color:'red'}}>{this.state.nameError}</Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhoneNo">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone No." required value={this.state.phoneno} onChange={this.handlePhoneNoChange}/>
                        <Form.Text style={{color:'red'}}>{this.state.phoneNoError}</Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email ID" required value={this.state.email} onChange={this.handleEmailChange}/>
                        <Form.Text style={{color:'red'}}>{this.state.emailError}</Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="Date" required value={this.state.dob} onChange={this.handleDobChange}/>
                        <Form.Text style={{color:'red'}}>{this.state.dobError}</Form.Text>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Patient's Address" required value={this.state.addr} onChange={this.handleAddrChange}/>
                        <Form.Text style={{color:'red'}}>{this.state.addrError}</Form.Text>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="Enter City Name" required value={this.state.city} onChange={this.handleCityChange}/>
                        <Form.Text style={{color:'red'}}>{this.state.cityError}</Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" required defaultValue={this.state.indiaState} onChange={this.handleIndiaStateChange}>
                            <option value="choose">Choose...</option>
                            <option value="maharashtra">Maharashtra</option>
                            <option value="goa">Goa</option>
                        </Form.Control>
                        <Form.Text style={{color:'red'}}>{this.state.indiaStateError}</Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control placeholder="Enter Zip Code" required value={this.state.zip} onChange={this.handleZipChange}/>
                        <Form.Text style={{color:'red'}}>{this.state.zipError}</Form.Text>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridFile">
                        <Form.Label>Upload file</Form.Label>
                        <Form.File required value={this.state.uploadFile} onChange={this.handleUploadFileChange}></Form.File>
                        <Form.Text style={{color:'red'}}>{this.state.uploadFileError}</Form.Text>
                        <Form.Text id="fileUploadHelpBlock" muted>
                            Max. file size should be 256kb. File type can be image or .dicom
                        </Form.Text>
                    </Form.Group>

                    <center><Button variant="outlined" className="btn1" type="submit">
                        Submit
                    </Button></center>
                    </Form>
            </div>
        )
    }
}

