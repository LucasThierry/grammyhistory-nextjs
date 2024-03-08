'use client'

// WaveChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

const WaveChart = ({ dataset }) => {
    const years = dataset.map(entry => entry.year);
    const types = ['Pop', 'Rap', 'RnB', 'Rock', 'Outros'];

    // Define an array of colors for each type
    const colors = [
        'rgba(135, 85, 251, 0.7)',
        'rgba(128, 159, 251, 0.7)',
        'rgba(114, 123, 250, 0.7)',
        'rgba(255, 51, 173, 0.7)',
        'rgba(57, 181, 255, 0.7)',
    ];

    const chartData = {
        labels: years,
        datasets: types.map((type, index) => ({
            label: type,
            data: dataset.map(entry => entry[type]),
            fill: true,
            borderColor: colors[index],
            backgroundColor: colors[index],
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
