import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <div>
            <div className='header-container'>
                <div className='header-item'>
                    <h1>Job-Assistant</h1>
                    <nav>
                        <p><Link to={'/'}>Home</Link></p>
                        <p><Link to= '/statistics'>Statistics</Link></p>
                        <p><Link to={'/applied'}>Applied Jobs</Link></p>
                        <p><Link to={'/blog'}>Blog</Link></p>
                    </nav>
                </div>
                <button>Start    Applying</button>
             </div>
       </div>
    );
};

export default Header;