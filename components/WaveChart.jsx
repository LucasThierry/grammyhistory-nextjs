'use client'

// WaveChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';


import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);

const WaveChart = ({ dataset }) => {
    const years = dataset.map(entry => entry.year);
    const types = ['type1', 'type2', 'type3', 'type4'];

    const chartData = {
        labels: years,
        datasets: types.map((type, index) => ({
            label: type,
            data: dataset.map(entry => entry[type]),
            fill: true,
            borderColor: `rgba(${index * 50 + 50}, ${index * 50 + 50}, ${index * 50 + 50}, 0.7)`,
            backgroundColor: `rgba(${index * 50 + 50}, ${index * 50 + 50}, ${index * 50 + 50}, 0.5)`,
        })),
    };

    const chartOptions = {
        scales: {
            x: {
                type: 'linear', // Use 'linear' for a numerical x-axis
                position: 'bottom',
            },
            y: {
                type: 'linear',
                position: 'left',
            },
        },
    };

    return (
        <div className="wave-chart-container">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default WaveChart;
