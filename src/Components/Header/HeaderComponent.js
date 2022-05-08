import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import arrowgreen from "../../assets/images/arrow-right-green.svg";
import dropmenuicon1 from "../../assets/images/drop-menu-icon1.svg";
import dropmenuicon2 from "../../assets/images/drop-menu-icon2.svg";
import dropmenuicon3 from "../../assets/images/drop-menu-icon3.svg";
import dropmenuicon4 from "../../assets/images/drop-menu-icon4.svg";
import dropmenuicon5 from "../../assets/images/drop-menu-icon5.svg";
import dropmenuicon6 from "../../assets/images/drop-menu-icon6.svg";
import Config from "../../Config.json";

//const HeaderComponent = () => {
export default class HeaderComponent extends Component {
    state = {
        loading: true,
        optionData: null,
    };

    async componentDidMount() {
        const url = Config.API_BASE + "options";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            optionData: data,
            loading: false,
        });
        //console.log(this.state.optionData.logo.url);
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.optionData) {
            return <div>Didn't get data from API</div>;
        }
        //const CANONICAL = Config.SITE_DOMAIN;
        const { optionData } = this.state;
        return (
            <Navbar className="header position-absolute top-0 start-0 w-100 py-4" expand="xl">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <NavLink to="/">
                            <img src={optionData.logo.url} alt="logo" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <NavDropdown className="megaMenu fs-15 fw-bold textClrGray mx-4" title="Services" id="basic-nav-dropdown">
                                <div className="shape">
                                    <div className="container px-0">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="megaMenuList isBgBorderRight">
                                                    <div className="menuWidget d-flex gap-3 align-items-start pb-5 mb-4">
                                                        <img src={dropmenuicon1} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Ideation and Evaluation</span>
                                                            </h4>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Product Design Sprint</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Scoping Session</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">UX Review</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Research & Development</span>
                                                            </NavDropdown.Item>
                                                        </div>
                                                    </div>
                                                    <div className="menuWidget d-flex gap-3 align-items-start">
                                                        <img src={dropmenuicon2} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Frontend Development</span>
                                                            </h4>
                                                            <div className="dbl-row-menu d-flex gap-3 gap-xl-4">
                                                                <div className="leftMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">RectJS</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Redux</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Angular</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Nextjs</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Vuejs</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                                <div className="rightMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Bootstrap</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Foundation</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Tailwind</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">HTML5</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="megaMenuList isBgBorderRight">
                                                    <div className="menuWidget borderBgNone d-flex gap-3 align-items-start pb-5 mb-5">
                                                        <img src={dropmenuicon3} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Product Design</span>
                                                            </h4>
                                                            <div className="dbl-row-menu d-flex gap-3 gap-xl-4">
                                                                <div className="leftMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Product Design</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">UX Design</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">UX Writing</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                                <div className="rightMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">UI Design</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Branding</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">UI Design</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menuWidget d-flex gap-3 align-items-start mt-5 pt-2">
                                                        <img src={dropmenuicon4} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>eCommerce & CMS Development</span>
                                                            </h4>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">WordPress</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Shopify</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Webflow</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Drupal</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Magento</span>
                                                            </NavDropdown.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="megaMenuList">
                                                    <div className="menuWidget borderBgNone d-flex gap-3 align-items-start pb-4 mb-3">
                                                        <img src={dropmenuicon5} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Mobile Development</span>
                                                            </h4>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">iOS</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Android</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">React Native</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-0" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Flutter</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Research & Development</span>
                                                            </NavDropdown.Item>
                                                        </div>
                                                    </div>
                                                    <div className="menuWidget d-flex gap-3 align-items-start">
                                                        <img src={dropmenuicon6} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Web & Software Solution</span>
                                                            </h4>
                                                            <div className="dbl-row-menu d-flex gap-3 gap-xl-4">
                                                                <div className="leftMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Nodejs</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">PHP</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Laravel</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">CodeIgniter</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                                <div className="rightMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Golang</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Express.js</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Ruby on Rails</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Python</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavDropdown>
                            <Nav.Link className="fs-15 fw-bold mx-4" href="#about">
                                <NavLink to="/about" className="text-decoration-none">
                                    About
                                </NavLink>
                            </Nav.Link>
                            <NavDropdown className="megaMenu fs-15 fw-bold textClrGray mx-4" title="Services" id="basic-nav-dropdown">
                                <div className="shape2">
                                    <div className="container px-0">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="megaMenuList isBgBorderRight">
                                                    <div className="menuWidget d-flex gap-3 align-items-start pb-5 mb-4">
                                                        <img src={dropmenuicon1} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Ideation and Evaluation</span>
                                                            </h4>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Product Design Sprint</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Scoping Session</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">UX Review</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Research & Development</span>
                                                            </NavDropdown.Item>
                                                        </div>
                                                    </div>
                                                    <div className="menuWidget d-flex gap-3 align-items-start">
                                                        <img src={dropmenuicon2} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Frontend Development</span>
                                                            </h4>
                                                            <div className="dbl-row-menu d-flex gap-3 gap-xl-4">
                                                                <div className="leftMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">RectJS</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Redux</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Angular</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Nextjs</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Vuejs</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                                <div className="rightMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Bootstrap</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Foundation</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Tailwind</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">HTML5</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="megaMenuList isBgBorderRight">
                                                    <div className="menuWidget borderBgNone d-flex gap-3 align-items-start pb-5 mb-5">
                                                        <img src={dropmenuicon3} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Product Design</span>
                                                            </h4>
                                                            <div className="dbl-row-menu d-flex gap-3 gap-xl-4">
                                                                <div className="leftMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Product Design</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">UX Design</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">UX Writing</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                                <div className="rightMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">UI Design</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Branding</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">UI Design</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menuWidget d-flex gap-3 align-items-start mt-5 pt-2">
                                                        <img src={dropmenuicon4} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>eCommerce & CMS Development</span>
                                                            </h4>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">WordPress</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Shopify</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Webflow</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Drupal</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Magento</span>
                                                            </NavDropdown.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="megaMenuList">
                                                    <div className="menuWidget borderBgNone d-flex gap-3 align-items-start pb-4 mb-3">
                                                        <img src={dropmenuicon5} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Mobile Development</span>
                                                            </h4>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">iOS</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Android</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">React Native</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-0" href="#action/3.3">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Flutter</span>
                                                            </NavDropdown.Item>
                                                            <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                <span className="icons">
                                                                    <img src={arrowgreen} alt="icon" />
                                                                </span>
                                                                <span className="menuText">Research & Development</span>
                                                            </NavDropdown.Item>
                                                        </div>
                                                    </div>
                                                    <div className="menuWidget d-flex gap-3 align-items-start">
                                                        <img src={dropmenuicon6} alt="icon" />
                                                        <div className="megaMenuItems">
                                                            <h4 className="widget-title fs-14 text-white fw-bold mt-2 mb-4 ms-3">
                                                                <span>Web & Software Solution</span>
                                                            </h4>
                                                            <div className="dbl-row-menu d-flex gap-3 gap-xl-4">
                                                                <div className="leftMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Nodejs</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">PHP</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Laravel</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">CodeIgniter</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                                <div className="rightMenu">
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.1">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Golang</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.2">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Express.js</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.3">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Ruby on Rails</span>
                                                                    </NavDropdown.Item>
                                                                    <NavDropdown.Item className="d-flex align-items-center fs-14 fw-medium textClrGray px-0 mb-1" href="#action/3.4">
                                                                        <span className="icons">
                                                                            <img src={arrowgreen} alt="icon" />
                                                                        </span>
                                                                        <span className="menuText">Python</span>
                                                                    </NavDropdown.Item>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavDropdown>
                            <Nav.Link className="fs-15 fw-bold mx-4" href="#portfolio">
                                Portfolio
                            </Nav.Link>
                            <Nav.Link className="fs-15 fw-bold mx-4" href="#careers">
                                Careers
                            </Nav.Link>
                            <Nav.Link className="fs-15 fw-bold mx-4">
                                <NavLink className="fs-15 fw-bold text-decoration-none" to="/blogs">
                                    Blog
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link className="fs-15 fw-bold mx-4">
                                <NavLink to="/contact" className="text-decoration-none">
                                    Contact
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                        <div className="gw-btn">
                            <button type="button" className="btn bgClrPink text-white border-0 py-2 px-4 rounded-pill fwSemiBold fs-14 h-42">
                                Request a Quote
                            </button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
