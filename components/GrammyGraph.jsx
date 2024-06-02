'use client'

// components/GrammyGraph.js
import { useEffect, useRef } from "react";
import * as d3 from "d3";

const GrammyGraph = ({ data }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);
        const width = window.innerWidth;
        const personSize = 260; // Adjusted size
        const padding = 20;

        const totalEntries = data.flatMap(year => Object.values(year.categories).flat()).length;
        const entriesPerRow = Math.floor(width / (personSize + padding));
        const numRows = Math.ceil(totalEntries / entriesPerRow);
        const calculatedHeight = numRows * (personSize + padding);

        svg.attr("viewBox", `0 0 ${width} ${calculatedHeight}`)
            .attr("width", "100%")
            .attr("height", calculatedHeight);

        const ethnicityColors = {
            White: "white",
            Black: "black",
            Asian: "yellow",
            Latino: "red",
            Hispanic: "red"
        };

        const getEthnicityColors = (ethnicity) => {
            if (ethnicity.includes("/")) {
                return ethnicity.split("/").map(e => ethnicityColors[e]);
            } else if (ethnicityColors[ethnicity]) {
                return [ethnicityColors[ethnicity]];
            }
            return [];
        };

        const getGenderPath = (gender, type) => {
            const maleSymbol = d3.symbol().type(d3.symbolTriangle).size(2600)(); // Adjusted size
            const femaleSymbol = d3.symbol().type(d3.symbolTriangle).size(2600)(); // Adjusted size

            const isCombination = gender.includes("Male") && gender.includes("Female");

            if (type === "Band") {
                if (gender === "Male") return Array(4).fill(maleSymbol);
                if (gender === "Female") return Array(4).fill(femaleSymbol);
                if (isCombination) return [maleSymbol, femaleSymbol, maleSymbol, femaleSymbol];
            } else if (type === "Collab") {
                if (isCombination) return [maleSymbol, femaleSymbol];
                if (gender === "Male") return [maleSymbol, maleSymbol];
                if (gender === "Female") return [femaleSymbol, femaleSymbol];
            } else {
                return gender === "Male" ? [maleSymbol] : [femaleSymbol];
            }
            return [];
        };

        const persons = svg.selectAll("g.person")
            .data(data.flatMap(year => Object.values(year.categories).flat()))
            .enter()
            .append("g")
            .attr("class", "person")
            .attr("transform", (d, i) => `translate(${(i % entriesPerRow) * (personSize + padding)}, ${Math.floor(i / entriesPerRow) * (personSize + padding)})`);

        persons.append("rect")
            .attr("width", personSize)
            .attr("height", personSize)
            .attr("fill", "darkgrey")  // Dark grey squares
            .attr("stroke", "black");

        persons.each(function (d) {
            const genderPaths = getGenderPath(d.gender, d.type);
            const ethnicityColors = getEthnicityColors(d.ethnicity);

            genderPaths.forEach((path, i) => {
                const xOffset = (i % 2) * (personSize / 2) + personSize / 4;
                const yOffset = (Math.floor(i / 2) * (personSize / 4)) + personSize / 2;
                const isFemale = (d.gender.includes("Female") && !d.gender.includes("Male")) || (d.gender.includes("Female") && i % 2 !== 0);
                const rotation = isFemale ? 180 : 0;
                d3.select(this).append("path")
                    .attr("d", path)
                    .attr("transform", `translate(${xOffset}, ${yOffset}) rotate(${rotation})`)
                    .attr("fill", ethnicityColors[i % ethnicityColors.length]);
            });
        });

        persons.append("text")
            .attr("x", personSize / 2)
            .attr("y", personSize - 20)  // Adjusted position for larger text
            .attr("text-anchor", "middle")
            .attr("font-size", "16px")  // Adjusted font size
            .attr("fill", "white")  // White text for contrast
            .text(d => d.artist);

    }, [data]);

    return (
        <svg ref={ref} width="100%" height="100%"></svg>
    );
};

export default GrammyGraph;
