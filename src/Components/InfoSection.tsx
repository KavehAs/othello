import React from 'react';
import PlayerProfile from './PlayerProfile';

const InfoSection = () => {
    return (
        <div className="w-full lg:w-1/4 xl:w-[30%] py-5 px-7 md:py-7 md:px-10 lg:py-16 lg:px-0
        xl:py-24 xl:px-12 absolute lg:sticky flex justify-between items-center lg:flex-col gap-20 md:gap-40 lg:gap-36 xl:gap-24 top-0">
            
            <div className="flex justify-between items-center gap-8">
                <PlayerProfile />
                <PlayerProfile />
            </div>

            <button className="w-24 lg:w-32 xl:w-44 py-2 lg:py-2.5 xl:py-3.5 text-center text-primaryColor lg:text-2xl font-medium rounded-2xl buttonLinearBG buttonShadow transition-all select-none hover:buttonPressedShadow">Reset</button>
        </div>
    );
};

export default InfoSection;