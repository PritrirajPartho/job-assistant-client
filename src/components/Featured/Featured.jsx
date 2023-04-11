import React, { useEffect, useState } from 'react';
import JobShow from '../JobShow/JobShow';
import './Featured.css';

const Featured = () => {
    // data loading here......
    const[jobs, setJobs] = useState([]);
    const[seeall, setSeeall] = useState(false);
    useEffect(()=>{
       fetch('data.json')
       .then(res => res.json())
       .then(data=> {
        if(seeall){
            setJobs(data)
        }
        else{
            setJobs(data.slice(0, 4));
        }
       })
    }, [seeall])

    return (
        <section>
             <div className='Above-header'>
             <h1 >Featured Jobs</h1>
             <p>So you have or are about to finish your university degree? Congratulations, <br /> you have completed a major milestone. Make sure to celebrate it appropriately.</p>
             </div>
             <div className='jobs-container'>
                    {
                        jobs.map(job => <JobShow
                        key={job.id}
                        job={job}               
                        ></JobShow> )
                    }
             </div>
        <button onClick={()=>setSeeall(true)}  className='see-all-btn'>See-All-Jobs</button>
        </section>
    );
};

export default Featured;