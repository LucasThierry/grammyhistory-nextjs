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
            <div className="w-24">
                <div className="mt-96 mr-96 ml-96 relative"> {/* Workaround to post not respecting paddings */}
                    <Image
                        src="/MargemGambiarra.svg"
                        alt="Margem Gambiarra"
                        width="250"
                        height="1"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center bg-gray-800 text-white py-2">
                        {legend}
                    </p>
                </div>
            </div>
            <div className="w-36 pr-96">
                {/* Dynamic text content with line breaks */}
                <h2 className="text-xl font-bold mb-4">{textHeading}</h2>
                <p className="text-gray-700 pl-10 pr-10">{renderTextWithLineBreaks(textContent)}</p>
            </div>
            <div className="w-96">
                <div className="mt-96 mr-96 ml-96"></div>
                {/* Adjust the margin to create space */}
            </div>
            <div className="w-24">
                <div className="mt-96 mr-96 ml-96 relative"> {/* Workaround to post not respecting paddings */}
                    <Image
                        src="/MargemGambiarra.svg"
                        alt="Margem Gambiarra"
                        width="500"
                        height="1"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center bg-gray-800 text-white py-2">
                        {legend}
                    </p>
                </div>
            </div>
            <div className="w-24">
                {/* Dynamic image using the Next.js Image component with aspect ratio */}
                <div className="mt-96 mr-96 ml-96 relative"> {/* Adjust the margin and add relative positioning */}
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