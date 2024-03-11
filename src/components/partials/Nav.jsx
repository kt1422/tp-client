import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-white shadow nav1" data-bs-theme="light">
            <div className="container-lg">
                <Link to={"/home"} className="d-flex nav-link">
                    <div className=''>
                        <img className="logo my-1 me-2" src={logo} height={60} alt="" />
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    </ul>
                    <div className="navbar-nav">
                        <li className="nav-item me-4">
                            <Link className={`nav-link menu ${props.page=="home"?"active":""}`} to={"/home"}>HOME</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className={`nav-link menu ${props.page=="about"?"active":""}`} to={"/aboutus"}>ABOUT US</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className={`nav-link menu ${props.page=="products"?"active":""}`} to={"/products"}>PRODUCTS</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className={`nav-link menu ${props.page=="contact"?"active":""}`} to={"/contactus"}>CONTACT US</Link>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav