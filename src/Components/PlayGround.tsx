import React from 'react';

const PlayGround = (): JSX.Element => {
    return (
        <div id='playground' className="w-full h-auto p-2 mt-[150px] flex flex-row justify-center items-center
        xl:w-[70%] xl:p-6 lg:w-[75%] lg:p-4 md:p-5 lg:mt-[150px] sm:p-2 sm:mt-[150px] ">

            <div id='field' className="w-full rounded-2xl p-3 grid grid-cols-8 grid-rows-8
            shadow-neu-ground lg:max-xl:p-2 sm:max-md:p-2 sm:max-md:rounded-xl"></div>
            
        </div>
    );
};

export default PlayGround;