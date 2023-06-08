import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../app/reduxHooks";
import { gameReset } from "../features/playground/playgroundSlice";

const GameResultModal = (): JSX.Element => {
  const playGroundData = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  return ReactDOM.createPortal(
    <CSSTransition
      in={playGroundData.showModal}
      unmountOnExit
      timeout={{ enter: 50, exit: 300 }}
    >
      <div className="modal fixed top-0 left-0 w-full h-full bg-[#616161a5] transition-all duration-500 flex flex-row justify-center items-center">
        <div className="modalContainer bg-mainColor p-[40px] rounded-xl translate-y-[-200%] flex flex-col justify-between items-center gap-6 transition-all duration-300" onClick={(e) => e.stopPropagation()}>
          <p>{playGroundData.modalText}</p>
          <button
            className="w-24 p-1 bg-mainColor border-none rounded-md shadow-buttonShadow hover:shadow-buttonPressedShadow "
            onClick={() => {
              dispatch(gameReset());
            }}>reset</button>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("modal") as HTMLDivElement
  );
};

export default GameResultModal;
