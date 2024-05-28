'use client'

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = () => {
    const chartRef = useRef();

    useEffect(() => {
        const svg = d3.select(chartRef.current)
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);

        // Add your D3 code here
        svg.append('circle')
            .attr('cx', 250)
            .attr('cy', 250)
            .attr('r', 100)
            .style('fill', 'blue');

        // Cleanup function to remove the SVG when the component is unmounted
        return () => {
            d3.select(chartRef.current).select('svg').remove();
        };
    }, []);

    return <div ref={chartRef}></div>;
};

export default D3Chart;
