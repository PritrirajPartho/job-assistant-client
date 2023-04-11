import React from 'react';
import './JobShow.css';
import imgLocation from '../../../public/img/Icons/location .png';
import imgDollar from '../../../public/img/Icons/dollar.png';
import { Link } from 'react-router-dom';

const JobShow = ({job}) => {
    const{id, name, img, company, salary, location, remote, type} = job;
    return (
        <div className='every-job-item'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h4>{company}</h4>
            <p>
                <span className='remote-full'>{remote ? <small>Remote</small> : <small>Onsite</small>}</span>
                <span className='remote-full'>{type}</span>
            </p>
            <p>
                <span className='loc-sal'><img src={imgLocation} alt="" />{location}</span>
                <span className='loc-sal'><img src={imgDollar} alt="" />{salary}</span>
            </p>
            <button className='btn-view'><Link to={`/job/${id}`}>View-Details</Link></button>
        </div>
    );
};

export default JobShow;