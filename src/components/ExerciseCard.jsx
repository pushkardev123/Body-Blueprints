import React from 'react';
import jsonData from '../info.json';

const ExerciseCard = ({ videoID }) => {
    // Correctly use template literals with backticks
    const videoSrc = `http://65.0.3.135:4000/videos/${videoID}`;

    const description = jsonData[videoID] ? jsonData[videoID][1] : 'No Description Available';
    const formattedDescription = description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div className="w-[97vw] m-6 h-[75vh] min-h-[500px] relative mx-auto bg-neutral-900 rounded-[15px] flex flex-col justify-evenly">

            <div className="flex items-end w-[95%] h-[50%] mx-auto rounded-[15px] shadow-inner overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover object-bottom"
                    src={videoSrc}
                />
            </div>

            <div className="w-[95%] h-[40%] mx-auto text-white bg-zinc-800 rounded-[15px] definitions flex flex-col justify-evenly">
                <div className="heading ml-3 font-semibold sm:text-3xl text-2xl font-['Inter']">
                    {jsonData[videoID] ? jsonData[videoID][0] : 'No Title Available'}
                </div>
                <div className="ml-3 p-1 leading-loose sm:text-base text-xs font-['Inter'] ">
                    {formattedDescription}
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;
