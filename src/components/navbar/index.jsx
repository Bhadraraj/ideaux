import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CompanyLogo from '../../assests/img/IdeauxLogo.png';
import './navstyle.css';

const Index = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand logo" to="/">
                    <img src={CompanyLogo} alt="Company Logo" width="200px" />
                </Link>
                <span className="d-flex">
                    <span className="hireModeTop">
                        <ul className="d-flex justify-content-center align-items-center mb-0">
                            <li className="nav-item px-0">
                                <button className="hireMe innerHire">
                                    <Link to="tel:+123456789">CONTACT US</Link>
                                </button>
                            </li>
                        </ul>
                    </span>
                    <button
                        className="menu navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg width={30} height={30} viewBox="0 0 70 75">
                            <path
                                className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path
                                className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                        </svg>
                    </button>
                </span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/about-us">
                                ABOUT US
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="services">
                                SERVICES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="#">
                                PORTFOLIO
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/contact-us">
                                CONTACT US
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/career">
                                CAREER
                            </Link>
                        </li>
                        <li className="nav-item">
                            <span className="hireModeTop">
                                <ul className="d-flex justify-content-center align-items-center mb-0">
                                    <li className="nav-item px-0">
                                        <button className="hireMe hideShow">
                                            <Link to="tel:+123456789">CONTACT US</Link>
                                        </button>
                                    </li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                    <span className="hireModeBottom innerHire">
                        <form className="d-flex" role="search">
                            <button className="hireMe">
                                <Link to="tel:+123456789">CONTACT US</Link>
                            </button>
                        </form>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Index;
