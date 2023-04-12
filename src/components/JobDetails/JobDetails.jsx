import React, { useEffect, useState } from 'react';
import './JobDetails.css';
import { useParams } from 'react-router-dom';
import location from '../../../public/img/Icons/location .png';
import dollar from '../../../public/img/Icons/dollar.png';
import call from '../../../public/img/Icons/call.png';
import mail from '../../../public/img/Icons/msg.png';
import  jobimg from '../../../public/img/Icons/business 1.png';

const JobDetails = () =>{
    const[job, setJob] = useState([]);
    const{jobId} = useParams();
 // useeffect work start below.................. 
    useEffect(() =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
           const result = data.find(j=> j.id === Number(jobId))
           setJob(result);
        })
    },[])
// locat-storage related issue....
const handleAddToJob = job =>{
   const{name, id, email} = job;
   let foundJob = [];
   const previousJob = JSON.parse(localStorage.getItem("jobId"));
   if(previousJob){
     const isThisjobFound = previousJob.find(j=> j.id === id)
     console.log(isThisjobFound);
       if(isThisjobFound){
         alert('Already job  added')
       }
       else{
         foundJob.push(...previousJob, job);
         localStorage.setItem("jobId", JSON.stringify(foundJob));
       }
   }
   else{
    foundJob.push(job)
    localStorage.setItem("jobId", JSON.stringify(foundJob));
   }
} 

    return (
        <section className='job-details-section'>
             <h1>Job---Details</h1>
             <div className='details-container'>
                 <div className='details-left-part'>
                    <p><span className='bolder'>Job Description:   </span>{job.description}</p>
                    <p><span className='bolder'>Job Responsibility:   </span>{job.responsibility}</p>
                    <span className='bolder'>Educational Requirements:</span>
                    <p>{job.education}.</p>
                    <span className='bolder'>Experiences:</span>
                    <p>{job.experience}.</p>
                 </div>
                 <div >
                       <div className='details-right-part'>
                            <h2>Job Details</h2>
                            <p><img className='icon'  src={dollar} />{job.salary}/ year</p>
                            <p><img className='icon'  src={jobimg} />{job.name}</p>
                            <p className='bolder'>Contact Information</p>
                            <div>
                            <p><img className='icon'   src={call} />{job.phone}</p>
                            <p><img className='icon'   src={mail} />{job.email}</p>
                            <p><img className='icon'   src={location} />{job.location}</p>
                            </div>
                       </div>
                    <button  onClick={() => handleAddToJob(job)}  className='apply-btn'>Apply Now</button>
                 </div>
             </div>
        </section>
    );
};

export default JobDetails;