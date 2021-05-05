import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faExternalLinkAlt,
  faTimesCircle,
  faCheckCircle,
  faCalendarAlt,
  faCodeBranch,
  faShoppingCart,
  faFolder,
  faMapMarkedAlt,
  faPager,
  faFileCode,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faGithub,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  Container,
  Navbar,
  Nav,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Routes } from "../routes";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import Logo from '../assets/img/brand/02.svg';
import MapboxImg from "../assets/img/mockup-map-presentation.png";

import pages from "../data/pages";

export default () => {

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        bg="dark"
        className="navbar-transparent navbar-theme-primary sticky-top"
      >
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand
            as={HashLink}
            to="#home"
            className="d-flex align-items-center"
          >
            <Image src={Logo} />
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">
                  Features
                </Nav.Link>
                <Nav.Link as={HashLink} to="#pages">
                  Pages
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  to="#folder"
                  className="d-sm-none d-xl-inline"
                >
                  Folder Structure
                </Nav.Link>
                <Nav.Link as={HashLink} to="#getting-started">
                  Getting Started
                </Nav.Link>
                <Nav.Link as={HashLink} to="#download">
                  Upgrade to Pro
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button
              as={HashLink}
              to="#download"
              variant="outline-white"
              className="ms-3"
            >
              <FontAwesomeIcon icon={faDownload} className="me-1" /> Download
            </Button>
          </div>
        </Container>
      </Navbar>
      <section
        className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white"
        id="home"
      ></section>
      <div className="section pt-0"></div>
      <section
        className="section section-md bg-soft pt-lg-3"
        id="features"
      ></section>
      <section className="section section-sm pt-0" id="pages"></section>
      <section className="section section-lg bg-primary text-white"></section>
      <section
        className="section section-lg line-bottom-soft"
        id="folder"
      ></section>
      <section
        className="section section-lg bg-primary"
        id="getting-started"
      ></section>
      <section className="section section-lg bg-white" id="download"></section>
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand
                as={HashLink}
                to="#home"
                className="me-lg-3 mb-3 d-flex align-items-center"
              >
                <Image src={Logo} />
                <span className="ms-2 brand-text">Common Sense</span>
              </Navbar.Brand>
              <p>
                Common Sense is a free and open source admin dashboard template
                powered by React.js and Bootstrap 5.
              </p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Themesberg</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link target="_blank" href="https://themesberg.com/blog">
                    Blog
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/products"
                  >
                    Products
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/about"
                  >
                    About Us
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/contact"
                  >
                    Contact Us
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link
                    as={Link}
                    to={Routes.DocsQuickStart.path}
                    target="_blank"
                  >
                    Getting started
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    as={Link}
                    to={Routes.DocsChangelog.path}
                    target="_blank"
                  >
                    Changelog
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/licensing"
                  >
                    License
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="example@company.com"
                      name="email"
                      aria-label="Subscribe form"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-secondary text-dark shadow-soft btn-block"
                      data-loading-text="Sending"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">
                We’ll never share your details. See our{" "}
                <Card.Link className="text-white" href="#">
                  Privacy Policy
                </Card.Link>
              </p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link
                href="https://themesberg.com"
                target="_blank"
                className="d-flex justify-content-center"
              >
                <Image
                  src={ThemesbergLogo}
                  height={35}
                  className="d-block mx-auto mb-3"
                  alt="Themesberg Logo"
                />
              </Card.Link>
              <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo"
              >
                <p className="font-weight-normal font-small mb-0">
                  Copyright © Themesberg 2019-
                  <span className="current-year">2021</span>. All rights
                  reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
