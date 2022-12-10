import React from "react";
// import TestiMonialsDetails from "../TestiMonialsDetails/TestiMonialsDetails";
import './HomePage.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import TestiMonials from "../TestiMonials/TestiMonials";

function MyVerticallyCenteredModal(props) {
    const [mobile, setMobile] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [program, setProgram] = useState('');
    
    const handleSubmit = () => {
        const url = "http://localhost/api/enquiry.php";

        let fData = new FormData();
        fData.append('mobile', mobile);
        fData.append('name', name);
        fData.append('email', email);
        fData.append('program', program);

        axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        
      </Modal.Header>
      <Modal.Body>
            <div className="callourexperts">
                <h6>Call Our Experts</h6>
                <p>Data Science: +91 7063119228</p>
                <p>Product Management: +91 9625811095</p>
                <img src='https://www.insaid.co/wp-content/uploads/2021/12/checklist-popup-image2.png' alt='call' height='200px' width='80%'/>
            </div>
            <div className="or-line">
                OR
                <img src={require('../images/icons8.png')} alt='line' />
            </div>
            <Form>
           <h6> Schedule a 1-on-1 consultation </h6>
            <p> Request a Call Back </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
                <Form.Control type="phone" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Form.Select aria-label="Default select example" value={program} onChange={(e) => setProgram(e.target.value)}>
                <option>---- Select Program ----</option>
                <option value="1">Data Science</option>
                <option value="2">Product Management</option>         
            </Form.Select>
            </Form.Group>
            <Button className='submit-button' variant="primary" type="submit"  onClick={handleSubmit}>
                Call Me Back
            </Button>
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const HomePage= () =>{
    const [modalShow, setModalShow] = React.useState(false);

    
    return (
        <>
        <div className="homepage-container">
            <div className="homepage-text-container">
                <h3>Get your Dream Job with</h3>
                <h2>Top Programs</h2>
                <p>Learn with India's leading online school for working professionals</p>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                    Talk to an Expert
                    </Button>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                {/* <button> Talk to an Expert</button> */}

                
                <div className="slow-text-container">
                    <div>
                    <img src={require("../images/salary.png")} alt='logo' width="" height="35"/>
                        150% Highest Salary Hike
                    </div>
                    <div>
                    <img src={require("../images/360.webp")} alt='logo' width="" height="35"/>
                        360 degree career support
                    </div>
                    <div>
                    <img src={require("../images/promotion.png")} alt='logo' width="" height="35"/>
                        80% Positive Career Impact
                    </div>
                </div>

            </div>
            <div className="imagecard-container">
            <TestiMonials/>
            </div>
        </div>
        
        {/* <TestiMonials/> */}

        </>
    )
}

export default HomePage


