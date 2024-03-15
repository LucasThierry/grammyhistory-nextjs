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
        'rgba(135, 85, 251, 0.5)',
        'rgba(128, 159, 251, 0.5)',
        'rgba(114, 123, 250, 0.5)',
        'rgba(255, 51, 173, 0.5)',
        'rgba(57, 181, 255, 0.5)',
    ];
    const border_colors = [
        'rgba(135, 85, 251, 1)',
        'rgba(128, 159, 251, 1)',
        'rgba(114, 123, 250, 1)',
        'rgba(255, 51, 173, 1)',
        'rgba(57, 181, 255, 1)',
    ];

    const chartData = {
        labels: years,
        datasets: types.map((type, index) => ({
            label: type,
            data: dataset.map(entry => entry[type]),
            fill: true,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            borderColor: border_colors[index],
            backgroundColor: colors[index],
        })),
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                title: {
                    display: true,
                    text: 'Statistics'
                }
            },
            x: {
                stacked: true
            }
        },
    };

    return (
        <div className="area-chart-container">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default WaveChart;
