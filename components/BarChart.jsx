'use client'

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        const svg = d3.select(chartRef.current)
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);

        const x = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([0, 500])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([500, 0]);

        svg.append('g')
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => x(d.name))
            .attr('y', d => y(d.value))
            .attr('width', x.bandwidth())
            .attr('height', d => 500 - y(d.value))
            .attr('fill', 'steelblue');

        svg.append('g')
            .attr('transform', 'translate(0,500)')
            .call(d3.axisBottom(x));

        svg.append('g')
            .call(d3.axisLeft(y));

        return () => {
            d3.select(chartRef.current).select('svg').remove();
        };
    }, [data]);

    return <div ref={chartRef}></div>;
};

export default BarChart;
