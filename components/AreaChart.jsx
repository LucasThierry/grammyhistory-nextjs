'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';

const AreaChart = ({ dataset }) => {
    // Custom labels
    const labels = ['Pop', 'Rap', 'RnB', 'Rock', 'Outros'];

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

    // Initialize datasets
    const datasets = labels.map((label, index) => ({
        label: label,
        fill: true,
        lineTension: 0.1,
        borderColor: border_colors[index],
        backgroundColor: colors[index],
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
        data: [],
    }));

    // Convert values to percentages
    dataset.forEach(item => {
        const total = labels.reduce((acc, label) => acc + item[label], 0);
        labels.forEach((label, index) => {
            datasets[index].data.push((item[label] / total) * 100); // Convert to percentage
        });
    });


    const chartData = {
        labels: dataset.map(item => item.year),
        datasets: datasets
    };

    return (
        <div>
            <Line
                data={chartData}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true,
                            stacked: true,
                            title: {
                                display: true,
                                text: 'Statistics'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%'; // Add '%' suffix to y-axis ticks
                                }
                            },
                        },
                        x: {
                            stacked: true
                        }
                    }
                }}
            />
        </div>
    );
};

export default AreaChart;
