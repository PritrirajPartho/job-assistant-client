import React from 'react';
import './PeopleShow.css';
import peopleImg from '../../../public/img/importent/people.png';

const PeopleShow = () => {
    return (
        <div className='people-container'>
             <div>
                <h1>One Step Closer To Your Dream Job</h1>
                <p>
                We all need work because we all need money to <br/> 
                secure our future. We have to earn for our  <br />
                families and we have to fulfil our needs. For <br />
                all these things we need
                </p>
                <button>Get Started</button>
             </div>
             <div className='people-item-img-con'>
                <img src={peopleImg} alt="" />
             </div>
       </div>
    );
};

export default PeopleShow;