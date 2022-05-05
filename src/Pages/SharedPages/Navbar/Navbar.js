import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Hooks/firebase.init';
import './Navbar.css';

const Navbar = () => {
        const [user] = useAuthState(auth);

        // Handle Sign Out:
        const handleSignOut = () => {
                signOut(auth);
        }

        return (
                <div className="pb-5">
                        <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                                <div class="container">
                                        <a class="navbar-brand" href="#">Navbar</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul class="navbar-nav ms-auto text-center mb-2 mb-lg-0">
                                                        <li class="nav-item">
                                                                <Link to="/" class="nav-link active fs-5" aria-current="page" href="#">Home</Link>
                                                        </li>
                                                        <li class="nav-item">
                                                                <Link to="/manage-inventories" class="nav-link active fs-5">Manage Inventories</Link>
                                                        </li>
                                                        {
                                                                user ?
                                                                        < div className="ps-2 pt-1">
                                                                                <button onClick={handleSignOut} className="btn login-btn fw-bold">SignOut</button>
                                                                        </div>
                                                                        :

                                                                        <li class="nav-item">
                                                                                <Link to="/login" class="nav-link active fs-5">Login</Link>
                                                                        </li>
                                                        }
                                                </ul>
                                        </div>
                                </div>
                        </nav>
                </div>
        );
};

export default Navbar;