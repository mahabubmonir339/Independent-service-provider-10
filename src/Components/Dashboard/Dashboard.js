import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart } from 'recharts';

const Dashboard = () => {
    const [Dashb, setDashb] = useState([]);
    useEffect(() => {
        axios.get('./Db.json')
            .then(data => setDashb(data))
    }, [])
    return (
        <>
            <BarChart width={850} height={640} data={Dashb}>
                <Bar dataKey="month" fill="#8884d8" />
            </BarChart>
        </>
    );
};

export default Dashboard;