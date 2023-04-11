import React from 'react';
import PeopleShow from '../PeopleShow/PeopleShow';
import JobCategory from '../JobCategory/JobCategory';
import Featured from '../Featured/Featured';

const Root = () => {
    return (
        <div>
           <PeopleShow></PeopleShow> 
           <JobCategory></JobCategory>
           <Featured></Featured>
        </div>
    );
};

export default Root;