import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import Center from "../components/Center";

export default function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll(".form-control");
    const templateParams = {
      username: inputs[0].value,
      email: inputs[1].value,
      message: inputs[2].value,
    };

    emailjs.send(
      "service_mx8v8ae",
      "template_czwsst5",
      templateParams,
      "user_1lQi3XC6we2X1sDqYaR32"
    );

    document.querySelector("form").reset();
    setShow(true);
  };
  return (
    <>
      <Modal className="text-dark" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You've sent your message to the team successfully.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Center centralizeBy="flex">
        <div className="contact-card">
          <div className="contact-card--header">
            <h2>Contact Us</h2>
            <h6 className="text-muted">
              Please fill this form in a decent manner
            </h6>
            <hr />
          </div>
          <div className="contact-card--body">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="form-fullname">
                <Form.Label className="form-label">
                  Full Name <span className="red-star">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control"
                  name="fullName"
                  placeholder="Enter Full Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="form-email">
                <Form.Label className="form-label">
                  Email <span className="red-star">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
                <Form.Text className="form-text text-muted">
                  We'll never share your email with anyone else
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="form-message">
                <Form.Label className="form-label">
                  Message <span className="red-star">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control"
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder="Enter Your Message"
                ></Form.Control>
              </Form.Group>
              <div className="form-submit">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </Center>
    </>
  );
}
