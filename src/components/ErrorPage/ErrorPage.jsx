import React from 'react';
import './ErroPage.css';

const ErrorPage = () => {
    return (
        <div>
            <p className='error'><p>404 Page Not Found</p> <br />
            <span >"The requested URL was not found."</span></p>
        </div>
    );
};

export default ErrorPage;