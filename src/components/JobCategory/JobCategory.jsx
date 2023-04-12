import React, { useEffect, useState } from 'react';
import './JobCategory.css';

const JobCategory = () => {
    const[data, setdata] = useState([])
    useEffect(() =>{
        fetch('../../../public/category.json')
        .then(res => res.json())
        .then(data => setdata(data))
    },[])
    return (
      <section className='root-section'>
        <h1>Job Category List</h1>
        <p>Explore thousands of job opportunities with all the information you need. It's your future</p>
            <div className='category-container'>
                {
                    data.map(d => <div className='category-item' key={d.id}> 
                        <img src={d.img} alt="" />
                        <h4>{d.name}</h4>
                        <p>{d.jobs_available}--jobs available</p>
                    </div>)
                }
           </div>
      </section>
    );
};

export default JobCategory;