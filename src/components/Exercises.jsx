import {React, useEffect, useState} from 'react'
import './output.css'
import fs from 'fs'
import { json } from 'react-router-dom';
import jsonData from'../info.json'
import ExerciseCard from './ExerciseCard';

const Exercises = ({muscleID}) => {

    const [videos, setVideos] = useState([]);
    useEffect(() => {
        setVideos(jsonData[muscleID] || []);
    }, [muscleID])
    return (
        <div className='gap-5 no-scrollbar'>
            <div className="w-80 capitalize ml-4 mt-4 text-left text-white  text-7xl font-extrabold font-['Inter']">{muscleID}</div>
            
            {videos.length > 0 ? (
                videos.map((videoID, index) => (
                    <ExerciseCard key={index} videoID={videoID} />
                ))
            ) : (
                <p>No videos available for this muscle group.</p>
            )}

        </div>

    )
}

export default Exercises
