import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './nav.css'


function nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">MovieStore</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link active">Home</a>
                            <a href="#" className="nav-item nav-link">Profile</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Movie News</a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Inbox</a>
                                    <a href="#" className="dropdown-item">About Us</a>
                                    <a href="#" className="dropdown-item">Contact us</a>
                                </div>
                            </div>
                        </div>
                        <form className="d-flex">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                                    <button type="button" className="btn btn-secondary"><i className="bi-search"></i></button>
                            </div>
                        </form>
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default nav