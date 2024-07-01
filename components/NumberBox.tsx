import React from 'react'

interface numProp {
    num: string | number,
    flip: boolean,
};

export const NumberBox = ({ num, flip }: numProp) => {
    return (
        <div className="flex flex-col items-center">
            <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-16 h-16  text-2xl md:text-4xl ">
                <div className="rounded-t-lg rounded-b-lg  w-full h-full"></div>
                <div className="text-5xl absolute z-10 font-light font-redhat md:text-7xl">
                   {num}
                </div>
                <div className=" rounded-b-lg rounded-t-lg w-full h-full"></div>
                <div className={`absolute  w-full h-1/2 to  p-0  rounded-t-lg z-5 ${flip ? 'animate-flip' : 'bg-transparent'}`}></div>
            </div>
        </div>
    )
}