import React, { useEffect, useState } from 'react';
import './JobDetails.css';
import { useParams } from 'react-router-dom';
import location from '../../../public/img/Icons/location .png';
import dollar from '../../../public/img/Icons/dollar.png';
import call from '../../../public/img/Icons/call.png';
import mail from '../../../public/img/Icons/msg.png';
import  jobimg from '../../../public/img/Icons/business 1.png';
import { addToDb, getShoppingCart } from '../utilities/Storage';

const JobDetails = () =>{

    const [jobs, setJobs] = useState([]);
    const [cart, setCart] = useState([])
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
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

//local storage work start here.......
useEffect( () =>{
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedjob
    for(const id in storedCart){
        // step 2: get job from jobs state by using id
        const addedJob = jobs.find(jb=> jb.id === id)
        if(addedJob){
            // step 3: add quantity
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            // step 4: add the added job to the saved cart
            savedCart.push(addedJob);
        }
    }
    // step 5: set the cart
    setCart(savedCart);
}, [jobs])

// handleAddToJob
const handleAddToJob = (job) => {
    let newCart = [];
    // if exist update quantity by 1
    const exists = cart.find(pd => pd.id === job.id);
    if(!exists){
        job.quantity = 1;
        newCart= [...cart, job]
    }
    else{
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== job.id);
        newCart = [...remaining, exists];
    }
// set to the return....
    setCart(newCart);
    addToDb(job.id)
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