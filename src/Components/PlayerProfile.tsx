import React from 'react';

const PlayerProfile = (): JSX.Element => {
    return (
        <div id='profile-container' className={`flex flex-col justify-between items-center gap-7`}>

        <div id='profile-logo' className={`w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[100px] xl:h-[100px]
         bg-mainColor rounded-full mainShadow flex justify-center items-center gap-0 text-xl
         lg:text-2xl xl:text-3xl`}>
          <div>P{2}</div>
        </div>

        <div id='profile-counter' className={`p-0.5 lg:p-1.5 w-14 lg:w-20 h-fit rounded-2xl text-center lg:text-2xl mainShadow`}>
          {2}
        </div>
        
      </div>
    );
};

export default PlayerProfile;