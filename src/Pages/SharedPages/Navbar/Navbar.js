import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
        return (
                <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <div class="container">
                                <a class="navbar-brand" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav ms-auto text-center mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                        <Link to="/" class="nav-link active text-dark fs-5" aria-current="page" href="#">Home</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <Link to="/manage-inventories" class="nav-link active text-dark fs-5">Manage Inventories</Link>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;