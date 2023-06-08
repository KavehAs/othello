import React from 'react';
import { useAppSelector } from '../app/reduxHooks';

interface propsType {
  player: "black" | "purple",
  playerNumber: number,
  disksQuantity: number
}

const PlayerProfile = ({ player, playerNumber, disksQuantity }: propsType): JSX.Element => {

  const playerGroundData = useAppSelector(state => state.playground);

  return (
    <div id='profile-container' className={`flex flex-col justify-between items-center gap-7`}>

      <div id='profile-logo' className={`w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[85px] xl:h-[85px]
         bg-mainColor rounded-full shadow-mainShadow flex justify-center items-center gap-0 text-xl
         lg:text-2xl xl:text-3xl ${playerGroundData.playerTurn === player ? "animate-playerTurn" : "animate-none"} ${player === "black" ? "text-dark" : "text-purple"}`}>
        <div>P{playerNumber}</div>
      </div>

      <div id='profile-counter' className={`p-0.5 lg:p-1.5 w-14 lg:w-20 h-fit rounded-2xl text-center lg:text-2xl shadow-mainShadow ${player === "black" ? "text-dark" : "text-purple"}`}>
        {disksQuantity}
      </div>

    </div>
  );
};

export default PlayerProfile;