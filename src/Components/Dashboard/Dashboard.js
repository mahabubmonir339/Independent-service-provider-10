import "./Dashboard.css";
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ComposedChart,
    Legend,
    Bar,
    Line,
    Scatter
} from "recharts";

const data = [
    {
        month: "Mar",
        investment: 100000,
        sell: 241,
        revenue: 10401
    },
    {
        month: "Apr",
        investment: 200000,
        sell: 423,
        revenue: 24500
    },
    {
        month: "May",
        investment: 500000,
        sell: 726,
        revenue: 67010
    },
    {
        month: "Jun",
        investment: 500000,
        sell: 529,
        revenue: 40405
    },
    {
        month: "Jul",
        investment: 600000,
        sell: 601,
        revenue: 50900
    },
    {
        month: "Aug",
        investment: 700000,
        sell: 670,
        revenue: 61000
    }
];

export default function App() {
    return (

        <> <h1>Chart</h1>
            <div className="container d-flex">
                <div>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="month"
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                        <Area
                            type="monotone"
                            dataKey="investment"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                        <Area
                            type="monotone"
                            dataKey="sell"
                            stackId="1"
                            stroke="#ffc658"
                            fill="#ffc658"
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stackId="1"
                            stroke="#ffc658"
                            fill="#ffc658"
                        />
                    </AreaChart>
                </div>
                <div>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="month" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                        <Scatter dataKey="sell" fill="red" />
                    </ComposedChart>
                </div>
            </div>
        </>
    );
}