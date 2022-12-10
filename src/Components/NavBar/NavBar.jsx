import React from "react";
import './NavBar.css';

function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid mx-auto">
                <a className="navbar-brand" href="#"><img src={require("../images/logo2.webp")} alt='logo' width="" height="74"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center " id="navbarNavDropdown">
                <ul className="navbar-nav">
                    
                    <li className="nav-item dropdown">
                    <a className="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Data Science
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Basic Programs</a></li>
                        <li><a className="dropdown-item" href="#">Advanced Programs</a></li>
                        <li><a className="dropdown-item" href="#">Job Guarantee Programs</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Product Management
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Basic Programs</a></li>
                        <li><a className="dropdown-item" href="#">Advanced Programs</a></li>
                        <li><a className="dropdown-item" href="#">Job Guarantee Programs</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">For Corporate</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About INSAID
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Why INSAID</a></li>
                        <li><a className="dropdown-item" href="#">Success Stories</a></li>
                        <li><a className="dropdown-item" href="#">Blog</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                    <button className="btn btn-primary myaccount" >Login</button>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar