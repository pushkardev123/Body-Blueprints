import React from 'react'
import './output.css'
const Exercises = ({muscleID}) => {
    return (
        <div className='gap-5 no-scrollbar'>
            <div className="w-80  ml-4 mt-4 text-left text-white  text-7xl font-extrabold font-['Inter']">Shoulders</div>
            <div className="w-[97vw] m-6 h-[75vh] min-h-[500px] relative mx-auto bg-neutral-900 rounded-[15px] flex flex-col justify-evenly" >
                <div className="relative w-[95%] h-[50%] mx-auto rounded-[15px] shadow-inner overflow-hidden"> {/* 50% padding-bottom for 2:1 aspect ratio */}
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="/video.mp4"
                    />
                </div>


                <div className="w-[95%] h-[40%] mx-auto text-white bg-zinc-800 rounded-[15px] definitions flex flex-col justify-evenly" >
                    <div className="heading ml-3 text-2xl font-['Inter'] ">
                        Exercise 1
                    </div>
                    <p className='p-1 ml-4 font-semibold sm:text-base text-xs font-["Inter"] ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, suscipit.</p>
                    <p className='p-1 ml-4 font-semibold sm:text-base text-xs font-["Inter"]' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, suscipit.</p>
                    <p className='p-1 ml-4 font-semibold sm:text-base text-xs font-["Inter"]' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, suscipit.</p>


                </div>
            </div>
            <div className="w-[97vw] m-6 h-[75vh] min-h-[500px] relative mx-auto bg-neutral-900 rounded-[15px] flex flex-col justify-evenly" >
                <div className="relative w-[95%] h-[50%] mx-auto rounded-[15px] shadow-inner overflow-hidden"> {/* 50% padding-bottom for 2:1 aspect ratio */}
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="/video.mp4"
                    />
                </div>


                <div className="w-[95%] h-[40%] mx-auto text-white bg-zinc-800 rounded-[15px] definitions flex flex-col justify-evenly" >
                    <div className="heading ml-3 text-2xl font-['Inter'] ">
                        Exercise 1
                    </div>
                    <p className='p-1 ml-4 font-semibold sm:text-base text-xs font-["Inter"] ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, suscipit.</p>
                    <p className='p-1 ml-4 font-semibold sm:text-base text-xs font-["Inter"]' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, suscipit.</p>
                    <p className='p-1 ml-4 font-semibold sm:text-base text-xs font-["Inter"]' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, suscipit.</p>


                </div>
            </div>

        </div>

    )
}

export default Exercises
