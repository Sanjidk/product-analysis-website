import React from 'react';
import './Dashboard.css';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

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
    <div className='dashboard-div'>
      <div className='mt-3 ms-5'>
          <h1>Area Chart</h1>
          <AreaChart width={600} height={300} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#00FF00" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#00FF00" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0000FF" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#0000FF" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#AF38EB" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#AF38EB" stopOpacity={0}/>
    </linearGradient>
      </defs>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="investment" stroke="#00FF00" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="sell" stroke="#0000FF" fillOpacity={1} fill="url(#colorPv)" />
      <Area type="monotone" dataKey="revenue" stroke="#AF38EB" fillOpacity={1} fill="url(#colorRv)" />
    </AreaChart>
      </div>
      <div className='mt-3'>
        <h1>Bar Chart</h1>
      <BarChart width={600} height={330} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#00FF00" />
          <Bar dataKey="sell" fill="#0000FF" />
          <Bar dataKey="revenue" fill="#AF38EB" />
        </BarChart>
      </div>
      <div className='mt-4 ms-5'>
      <h1>Line Chart</h1>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line dataKey="investment" stroke="#00FF00" />
      <Line dataKey="sell" stroke="#0000FF" />
      <Line dataKey="revenue" stroke="#AF38EB" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
      </div>
      <div className='mt-5'>
        <h1>Pie Chart</h1>
        <PieChart width={600} height={250}>
        <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={55} fill="#00FF00" label />
        <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#0000FF" label />
        <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={75} outerRadius={90} fill="#AF38EB" label />
      <Tooltip />
    </PieChart>
    <p className='pie-span'>
      <span>Green: Investment</span>
      <span>Blue: Sell</span>
      <span>Purple: Revenue</span>
      </p>
      </div>
    </div>

    

  );
};

export default Dashboard;