import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

  const data = [
    {
        "month": "Mar",
        "investment": 100,
        "sell": 80,
        "revenue": 20
    },
    {
        "month": "Apr",
        "investment": 200,
        "sell": 180,
        "revenue": 80
    },
    {
        "month": "May",
        "investment": 300,
        "sell": 250,
        "revenue": 50
    },
    {
        "month": "Jun",
        "investment": 500,
        "sell": 550,
        "revenue": 50
    },
    {
        "month": "Jul",
        "investment": 600,
        "sell": 800,
        "revenue": 200
    },
    {
        "month": "Aug",
        "investment": 700,
        "sell": 970,
        "revenue": 260
    }
  ]

  return (
    <div>
        <div className='mt-5 ms-3'>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line dataKey="investment" stroke="#00FF00" />
      <Line dataKey="sell" stroke="#0000FF" />
      <Line dataKey="revenue" stroke="#FF0000" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
      </div>
      <div>
        
      </div>
    </div>

    

  );
};

export default Dashboard;