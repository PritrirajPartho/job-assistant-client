import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-item'>
                <h1>Job-Assistant</h1>
                <nav>
                      <p><Link>Statistics</Link></p>
                      <p><Link>Applied Jobs</Link></p>
                      <p><Link>Blog</Link></p>
                </nav>
            </div>
            <button>Start Applying</button>
        </div>
    );
};

export default Header;