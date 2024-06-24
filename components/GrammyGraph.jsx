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

        const maleSymbolPath = "M10 10 A 1 1 0 0 1 20 10 A 1 1 0 0 1 10 10 M 10 20 L 10 40 L 15 40 L 15 50 L 25 50 L 25 40 L 30 40 L 30 20 Z M 12 24 L 8 24 L 8 26 L 12 26 Z M 28 24 L 32 24 L 32 26 L 28 26 Z";
        const femaleSymbolPath = "M20 10 A 1 1 0 0 1 30 10 A 1 1 0 0 1 20 10 M 20 20 L 20 40 L 25 40 L 25 50 L 35 50 L 35 40 L 40 40 L 40 20 Z M 22 24 L 18 24 L 18 26 L 22 26 Z M 38 24 L 42 24 L 42 26 L 38 26 Z";

        const getGenderPath = (gender, type) => {
            const isCombination = gender.includes("Male") && gender.includes("Female");

            if (type === "Band") {
                if (gender === "Male") return Array(4).fill(maleSymbolPath);
                if (gender === "Female") return Array(4).fill(femaleSymbolPath);
                if (isCombination) return [maleSymbolPath, femaleSymbolPath, maleSymbolPath, femaleSymbolPath];
            } else if (type === "Collab") {
                if (isCombination) return [maleSymbolPath, femaleSymbolPath];
                if (gender === "Male") return [maleSymbolPath, maleSymbolPath];
                if (gender === "Female") return [femaleSymbolPath, femaleSymbolPath];
            } else {
                return gender === "Male" ? [maleSymbolPath] : [femaleSymbolPath];
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
