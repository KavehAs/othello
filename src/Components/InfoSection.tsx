import React from 'react';
import PlayerProfile from './PlayerProfile';
import { useAppDispatch, useAppSelector } from '../app/reduxHooks';
import { gameReset, setModalText } from '../features/playground/playgroundSlice';

const InfoSection = (): JSX.Element => {

    const playGroundData = useAppSelector(state => state.playground)

    const dispatch = useAppDispatch()

    return (
        <div className="w-full lg:h-screen lg:w-1/4 xl:w-[30%] py-5 px-6 md:py-6 md:px-10 lg:py-16 lg:px-0
        xl:py-24 xl:px-12 lg:sticky flex justify-between items-center lg:flex-col gap-20 md:gap-40 lg:gap-36 xl:gap-24 top-0">
            
            <div className="flex justify-between items-center gap-8">
                <PlayerProfile player={"black"} playerNumber={1} disksQuantity={playGroundData.blackNumber} />
                <PlayerProfile player={"purple"} playerNumber={2} disksQuantity={playGroundData.purpleNumber} />
            </div>

            <button className="w-24 lg:w-32 xl:w-44 py-2 lg:py-2.5 xl:py-3.5 text-center text-primaryColor lg:text-2xl font-medium rounded-2xl buttonLinearBG shadow-buttonShadow transition-all select-none hover:shadow-buttonPressedShadow"
            onClick={() => dispatch(gameReset())}>Reset</button>
        </div>
    );
};

export default InfoSection;