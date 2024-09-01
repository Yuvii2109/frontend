import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-md bg-body-primary" style={{height: "7rem", borderBottom: "1px solid #b1b1b1", paddingLeft: "3rem"}}>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src='media/images/logo.svg' alt='Olympiad specialist Logo' 
                        style={{width: "30%"}}/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item" className='ms-4'>
                                <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item" className='ms-4'>
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item" className='ms-4'>
                                <Link class="nav-link" to="/products">Product</Link>
                            </li>
                            <li class="nav-item" className='ms-4'>
                                <Link class="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item" className='ms-4'>
                                <Link class="nav-link" to="/support">Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;