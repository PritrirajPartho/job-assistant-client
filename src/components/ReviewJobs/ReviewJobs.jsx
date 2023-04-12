import React from 'react';
import './ReviewJobs.css';
import address from '../../../public/img/Icons/location .png';
import  dollar from '../../../public/img/Icons/dollar.png';


const ReviewJobs = ({job}) => {
    const{ img, name, company, remote, type, location, salary, } = job;
    return (
        <section className='applied-job-every-item'>
            <div className='item-right-part-applied'>
                <div className='img-company-logo-div'><img src={img} alt="" /></div>
                <div className='text-details'>
                    <h2>{name}</h2>
                    <p>{company}</p>
                    <p><small>{remote ? 'Remote' : 'Onsite'}</small><small>{type}</small></p>
                    <p><span><img src={address}/>{location}</span><span><img src={dollar}/>{salary}</span></p>
                </div>
            </div>
            <div>
                 <button className='btn-duplicate-view'>View Details</button>
            </div>
        </section>
    );
};

export default ReviewJobs;