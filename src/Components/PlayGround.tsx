import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/reduxHooks";

// Components
import Disks from "./Disks";

// Redux actions
import { changePlayerTurn, setDiskQuantities, setEndGame, setEndOfPossibilities } from "../features/playground/playgroundSlice";


const PlayGround = (): JSX.Element => {
  const playGroundData = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();
  const {
    disks: [row1, row2, row3, row4, row5, row6, row7, row8],
  } = playGroundData;

  useEffect(() => { // when ever player turn changes , this effect check the changes due to last move : disks number , possibilities of end game or winning situation
    let blackQuantity = 0,
      purpleQuantity = 0,
      diskCounter = 0,
      possibleCounter = 0;
    for (const row of playGroundData.disks) {
      for (const item of row) {
        switch (item.color) {
          case "black":
            blackQuantity++;
            break;
          case "purple":
            purpleQuantity++;
            break;
          default:
            break;
        }
        !item.isEmpty && diskCounter++;
        item.isPossible && possibleCounter++;
      }
    }
    dispatch(setDiskQuantities({ blackQuantity, purpleQuantity }));

    if (diskCounter === 64) dispatch(setEndGame()); // if there is no empty space that means game has ended and winner function runs
    else if (possibleCounter === 0) {
      if (playGroundData.endOfPossibilities)
        dispatch(setEndGame()) // if there were not any possible moves for each color game is done
      else {
        dispatch(setEndOfPossibilities(true));
        dispatch(changePlayerTurn());
      }
    } else if (possibleCounter > 0) dispatch(setEndOfPossibilities(false));
    // here we set true to endOfPossibilities after detection no Possibilities so if the next
    // color has no move neither game would end but if it has endOfPossibilities set to false again
  } , [playGroundData.playerTurn]);

  return (
    <div
      id="playground"
      className="w-full min-h-screen p-2  flex flex-row justify-center items-center
        xl:w-[70%] xl:pt-16 lg:w-[75%] lg:p-8 md:p-5 sm:p-2 overflow-hidden lg:overflow-x-hidden"
    >
      <div
        id="field"
        className="w-full lg:mt-2 rounded-2xl p-3 grid grid-cols-8 grid-rows-8
            shadow-neu-ground lg:max-xl:p-2 sm:max-md:p-2 sm:max-md:rounded-xl "
      >

        {/* rendering the playground based on disk status array */}
        {row1.map((item) => (
          <Disks
            key={item.diskId}
            color={item.color}
            isEmpty={item.isEmpty}
            isPossible={item.isPossible}
            diskId={item.diskId}
          />
        ))}

        {row2.map((item) => (
          <Disks
            key={item.diskId}
            color={item.color}
            isEmpty={item.isEmpty}
            isPossible={item.isPossible}
            diskId={item.diskId}
          />
        ))}

        {row3.map((item) => (
          <Disks
            key={item.diskId}
            color={item.color}
            isEmpty={item.isEmpty}
            isPossible={item.isPossible}
            diskId={item.diskId}
          />
        ))}

        {row4.map((item) => (
          <Disks
            key={item.diskId}
            color={item.color}
            isEmpty={item.isEmpty}
            isPossible={item.isPossible}
            diskId={item.diskId}
          />
        ))}

        {row5.map((item) => (
          <Disks
            key={item.diskId}
            color={item.color}
            isEmpty={item.isEmpty}
            isPossible={item.isPossible}
            diskId={item.diskId}
          />
        ))}

        {row6.map((item) => (
          <Disks
            key={item.diskId}
            color={item.color}
            isEmpty={item.isEmpty}
            isPossible={item.isPossible}
            diskId={item.diskId}
          />
        ))}

        {row7.map((item) => (
          <Disks
            key={item.diskId}
            color={item.color}
            isEmpty={item.isEmpty}
            isPossible={item.isPossible}
            diskId={item.diskId}
          />
        ))}

        {row8.map((item) => (
          <Disks
            key={item.diskId}
            color={item.color}
            isEmpty={item.isEmpty}
            isPossible={item.isPossible}
            diskId={item.diskId}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayGround;
