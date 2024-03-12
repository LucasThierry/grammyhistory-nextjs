import React from 'react';
import Image from "next/image"


const TextImageFlex = ({ textHeading, textContent, imagePath, altText, width, height, legend }) => {
    const renderTextWithLineBreaks = (text) => {
        const lines = text.split('\n');
        return lines.map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <section className="flex items-start">
            <div className="w-2/3 pr-20">
                {/* Dynamic text content with line breaks */}
                <h2 className="text-xl font-bold mb-4">{textHeading}</h2>
                <p className="text-gray-700">{renderTextWithLineBreaks(textContent)}</p>
            </div>
            <div className="w-1/3">
                {/* Dynamic image using the Next.js Image component with aspect ratio */}
                <div className="mt-4 relative"> {/* Adjust the margin and add relative positioning */}
                    <Image
                        src={imagePath}
                        alt={altText}
                        width={width}
                        height={height}
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center bg-gray-800 text-white py-2">
                        {legend}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TextImageFlex;