'use client'

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PeopleD3 = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', 500)
            .attr('height', 200);

        svg.selectAll('*').remove(); // Clear previous drawings

        const group = svg.selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr('transform', (d, i) => `translate(${i * 100 + 50}, 50)`);

        // Draw people
        group.each(function(d) {
            const g = d3.select(this);
            if (d.type === 'man') {
                // Head
                g.append('circle')
                    .attr('cx', 30)
                    .attr('cy', 30)
                    .attr('r', 20)
                    .attr('fill', '#F4A261');
                // Body
                g.append('rect')
                    .attr('x', 20)
                    .attr('y', 50)
                    .attr('width', 20)
                    .attr('height', 50)
                    .attr('fill', '#264653');
                // Arms
                g.append('line')
                    .attr('x1', 10)
                    .attr('y1', 60)
                    .attr('x2', 50)
                    .attr('y2', 60)
                    .attr('stroke', '#264653')
                    .attr('strokeWidth', 5);
                // Legs
                g.append('line')
                    .attr('x1', 30)
                    .attr('y1', 100)
                    .attr('x2', 20)
                    .attr('y2', 140)
                    .attr('stroke', '#264653')
                    .attr('strokeWidth', 5);
                g.append('line')
                    .attr('x1', 30)
                    .attr('y1', 100)
                    .attr('x2', 40)
                    .attr('y2', 140)
                    .attr('stroke', '#264653')
                    .attr('strokeWidth', 5);
            } else if (d.type === 'woman') {
                // Head
                g.append('circle')
                    .attr('cx', 30)
                    .attr('cy', 30)
                    .attr('r', 20)
                    .attr('fill', '#F4A261');
                // Body
                g.append('rect')
                    .attr('x', 20)
                    .attr('y', 50)
                    .attr('width', 20)
                    .attr('height', 50)
                    .attr('fill', '#E76F51');
                // Arms
                g.append('line')
                    .attr('x1', 10)
                    .attr('y1', 60)
                    .attr('x2', 50)
                    .attr('y2', 60)
                    .attr('stroke', '#E76F51')
                    .attr('strokeWidth', 5);
                // Legs
                g.append('line')
                    .attr('x1', 30)
                    .attr('y1', 100)
                    .attr('x2', 20)
                    .attr('y2', 140)
                    .attr('stroke', '#E76F51')
                    .attr('strokeWidth', 5);
                g.append('line')
                    .attr('x1', 30)
                    .attr('y1', 100)
                    .attr('x2', 40)
                    .attr('y2', 140)
                    .attr('stroke', '#E76F51')
                    .attr('strokeWidth', 5);
                // Dress
                g.append('polygon')
                    .attr('points', '20,100 40,100 30,130')
                    .attr('fill', '#E76F51');
            }
        });
    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default PeopleD3;
