import { useEffect } from "react";
import InfoSection from "./Components/InfoSection";
import PlayGround from "./Components/PlayGround";
import { useAppDispatch, useAppSelector } from "./app/reduxHooks";
import { setModalText } from "./features/playground/playgroundSlice";
import GameResultModal from "./Components/GameResultModal";

function App() {
  const playGroundData = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (playGroundData.endGame) {
      const { blackNumber, purpleNumber } = playGroundData;
      if (blackNumber > purpleNumber) dispatch(setModalText("Black is Winner"));
      else if (blackNumber < purpleNumber)
        dispatch(setModalText("Purple is Winner"));
      else dispatch(setModalText("Game is Draw"));


    }
  }, [playGroundData.endGame]);

  return (
    <div className="w-full  min-h-screen bg-mainColor relative flex flex-col items-between gap-0 lg:flex-row ">
      <InfoSection />
      <PlayGround />
      <GameResultModal />
    </div>
  );
}

export default App;
