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
      <div className="modal">
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <p>{playGroundData.modalText}</p>
          <button onClick={() => {
            dispatch(gameReset());
          }}>reset</button>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("modal") as HTMLDivElement
  );
};

export default GameResultModal;
