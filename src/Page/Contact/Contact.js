import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import lineShape from "../../assets/images/secLineShape.svg";
import locationIcon from "../../assets/images/location-icon.svg";
import phoneIcon from "../../assets/images/phone.svg";
import skypeIcon from "../../assets/images/ms_skype.svg";
import clockIcon from "../../assets/images/clock.svg";
import "./Contact.scss";

const Contact = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contactInfo d-flex align-items-center">
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="sectionHeader mb-5">
                                <span class="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block">Lat’s Talk</span>
                                <div class="secTitle fw-normal fs-48 text-white mb-3">
                                    <strong>Contact </strong> us
                                </div>
                                <div class="secIntro textClrGray fs-6 fw-normal mb-2">
                                    <div class="mb-0">Take five minutes to fill out our project form so that we can get to know you and understand your project.</div>
                                </div>
                                <div class="lineShape">
                                    <img src={lineShape} alt="lineShape" />
                                </div>
                            </div>
                            <div className="getInTouch mb-5 mb-xl-0">
                                <div className="row isBgBorder pb-4 mb-4">
                                    <div className="col-lg-6">
                                        <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center mb-5">
                                            <div className="icon">
                                                <img src={locationIcon} alt="lineShape" />
                                            </div>
                                            <div className="info">
                                                <h4 className="country text-white fw-bold fs-14">USA Office</h4>
                                                <p className="address textClrGray fs-14 fw-medium mb-0">
                                                    935 Allen Way, Yuba City <br className="d-none d-lg-inline" /> CA 95993
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center mb-5">
                                            <div className="icon">
                                                <img src={locationIcon} alt="lineShape" />
                                            </div>
                                            <div className="info">
                                                <h4 className="country text-white fw-bold fs-14">Saudi Arabia Office</h4>
                                                <p className="address textClrGray fs-14 fw-medium mb-0">
                                                    Jeddah State, P.O. Box-31242, <br className="d-none d-lg-inline" /> Jubail 31951
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                            <div className="icon">
                                                <img src={locationIcon} alt="lineShape" />
                                            </div>
                                            <div className="info">
                                                <h4 className="country text-white fw-bold fs-14">Bangladesh</h4>
                                                <p className="address textClrGray fs-14 fw-medium mb-0">Rupayan Shelford, 17th Floor, 23/6, Dhaka 1207</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row isBgBorder pb-4 mb-4">
                                    <div className="col-lg-6 py-3">
                                        <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                            <div className="icon">
                                                <img src={phoneIcon} alt="lineShape" />
                                            </div>
                                            <div className="info">
                                                <h4 className="country text-white fw-bold fs-14">Phone</h4>
                                                <a href="tel:(+775) 404-5251" className="address textClrGray fs-14 fw-medium mb-0 text-decoration-none">
                                                    (+775) 404-5251
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 py-3">
                                        <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                            <div className="icon">
                                                <img src={skypeIcon} alt="lineShape" />
                                            </div>
                                            <div className="info">
                                                <h4 className="country text-white fw-bold fs-14">Skype</h4>
                                                <p className="address textClrGray fs-14 fw-medium mb-0">getwebinc</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                            <div className="icon">
                                                <img src={clockIcon} alt="lineShape" />
                                            </div>
                                            <div className="info">
                                                <h4 className="country text-white fw-bold fs-14">Open Hours</h4>
                                                <p className="address textClrGray fs-14 fw-medium mb-0 text-decoration-none">Saturday - Thursday: 10 am - 7 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contactWrapper bgClrSolitude isRadius12 p-4 p-xl-5 h-100">
                                <div className="contactHeader mb-4">
                                    <h2 className="textClrThemeDark fs-4 fw-bold mb-3">Got a project in mind? We’re all ears.</h2>
                                    <p className="textClrGrayDark fs-6 fw-normal mb-0">It usually takes us up to 48 hours to get back to you.</p>
                                </div>
                                <Form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Form.Group className="contactField mb-4" controlId="formBasicName">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Name</Form.Label>
                                                <Form.Control type="text" placeholder="Please enter your name" className="rounded-pill px-4" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-6">
                                            <Form.Group className="contactField mb-4" controlId="formBasicEmail">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Email</Form.Label>
                                                <Form.Control type="email" placeholder="Please enter your email" className="rounded-pill px-4" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-12">
                                            <Form.Group className="contactField mb-3" controlId="formBasicContactNumber">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Contact Number</Form.Label>
                                                <div className="countryCode d-flex align-items-center">
                                                    <Form.Select className="w-25 border-0 rounded-0 px-3">
                                                        <option>US (+1)</option>
                                                        <option value="1">DZ (+213)</option>
                                                        <option value="2">AD (+376)</option>
                                                        <option value="3">AI (+1264)</option>
                                                    </Form.Select>
                                                    <Form.Control type="phone" placeholder="Please enter your number" className="rounded-0 border-0 px-3 w-75" />
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-12">
                                            <Form.Group className="contactField mb-4" controlId="formBasicMessage">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Message</Form.Label>
                                                <Form.Control as="textarea" placeholder="Enter your message here..." className="isRadius16 p-3" style={{ height: "88px" }} />
                                            </Form.Group>
                                        </div>
                                        <div className="sbm-btn text-end">
                                            <Button className="bgClrGreen w-auto h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill" type="submit">
                                                Send Message
                                            </Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
