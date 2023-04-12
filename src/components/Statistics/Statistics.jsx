import React from 'react';
import './Statistics.css';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = [
        {
          "name": "Assignment-1",
          "id": 1,
          "mark": 60, 
        },
        {
          "name": "Assignment-2",
          "id":2 ,
          "mark": 50, 
        },
        {
          "name": "Assignment-3",
          "id": 3,
          "mark": 50, 
        },
        {
          "name": "Assignment-4",
          "id": 4,
          "mark": 60, 
        },
        {
          "name": "Assignment-5",
          "id": 5,
          "mark": 40, 
        },
        {
          "name": "Assignment-6",
          "id": 6,
          "mark": 60, 
        },
        {
          "name": "Assignment-7",
          "id": 7,
          "mark": 60, 
        }
      ]
      
    return (
        <div>
            <h1 className='chart-heading'>Your Assignment progress with..... (ComposedChart) </h1>
            {/* chart show start below........ */}
            <ComposedChart width={1000} height={350} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="id" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="mark" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="mark" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;