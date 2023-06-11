import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Helper Functions
import { disksClickHandler, findPossibleMoves } from '../helper'

export interface playgroundType {
  disks: {
    diskId: string, color: null | "purple" | "black", isEmpty: boolean, isPossible: boolean
  }[][],
  playerTurn: "black" | "purple",
  blackNumber: number,
  purpleNumber: number,
  endOfPossibilities: boolean,
  endGame: boolean,
  showModal: boolean, // state to handle modal
  modalText: string,
}

const initialState: playgroundType = {
  disks: [
    // default properties of Disks
    [
      { diskId: "a0", color: null, isEmpty: true, isPossible: false },
      { diskId: "a1", color: null, isEmpty: true, isPossible: false },
      { diskId: "a2", color: null, isEmpty: true, isPossible: false },
      { diskId: "a3", color: null, isEmpty: true, isPossible: false },
      { diskId: "a4", color: null, isEmpty: true, isPossible: false },
      { diskId: "a5", color: null, isEmpty: true, isPossible: false },
      { diskId: "a6", color: null, isEmpty: true, isPossible: false },
      { diskId: "a7", color: null, isEmpty: true, isPossible: false },
    ],
    [
      { diskId: "b0", color: null, isEmpty: true, isPossible: false },
      { diskId: "b1", color: null, isEmpty: true, isPossible: false },
      { diskId: "b2", color: null, isEmpty: true, isPossible: false },
      { diskId: "b3", color: null, isEmpty: true, isPossible: false },
      { diskId: "b4", color: null, isEmpty: true, isPossible: false },
      { diskId: "b5", color: null, isEmpty: true, isPossible: false },
      { diskId: "b6", color: null, isEmpty: true, isPossible: false },
      { diskId: "b7", color: null, isEmpty: true, isPossible: false },
    ],
    [
      { diskId: "c0", color: null, isEmpty: true, isPossible: false },
      { diskId: "c1", color: null, isEmpty: true, isPossible: false },
      { diskId: "c2", color: null, isEmpty: true, isPossible: false },
      { diskId: "c3", color: null, isEmpty: true, isPossible: true },
      { diskId: "c4", color: null, isEmpty: true, isPossible: false },
      { diskId: "c5", color: null, isEmpty: true, isPossible: false },
      { diskId: "c6", color: null, isEmpty: true, isPossible: false },
      { diskId: "c7", color: null, isEmpty: true, isPossible: false },
    ],
    [
      { diskId: "d0", color: null, isEmpty: true, isPossible: false },
      { diskId: "d1", color: null, isEmpty: true, isPossible: false },
      { diskId: "d2", color: null, isEmpty: true, isPossible: true },
      { diskId: "d3", color: "purple", isEmpty: false, isPossible: false },
      { diskId: "d4", color: "black", isEmpty: false, isPossible: false },
      { diskId: "d5", color: null, isEmpty: true, isPossible: false },
      { diskId: "d6", color: null, isEmpty: true, isPossible: false },
      { diskId: "d7", color: null, isEmpty: true, isPossible: false },
    ],
    [
      { diskId: "e0", color: null, isEmpty: true, isPossible: false },
      { diskId: "e1", color: null, isEmpty: true, isPossible: false },
      { diskId: "e2", color: null, isEmpty: true, isPossible: false },
      { diskId: "e3", color: "black", isEmpty: false, isPossible: false },
      { diskId: "e4", color: "purple", isEmpty: false, isPossible: false },
      { diskId: "e5", color: null, isEmpty: true, isPossible: true },
      { diskId: "e6", color: null, isEmpty: true, isPossible: false },
      { diskId: "e7", color: null, isEmpty: true, isPossible: false },
    ],
    [
      { diskId: "f0", color: null, isEmpty: true, isPossible: false },
      { diskId: "f1", color: null, isEmpty: true, isPossible: false },
      { diskId: "f2", color: null, isEmpty: true, isPossible: false },
      { diskId: "f3", color: null, isEmpty: true, isPossible: false },
      { diskId: "f4", color: null, isEmpty: true, isPossible: true },
      { diskId: "f5", color: null, isEmpty: true, isPossible: false },
      { diskId: "f6", color: null, isEmpty: true, isPossible: false },
      { diskId: "f7", color: null, isEmpty: true, isPossible: false },
    ],
    [
      { diskId: "g0", color: null, isEmpty: true, isPossible: false },
      { diskId: "g1", color: null, isEmpty: true, isPossible: false },
      { diskId: "g2", color: null, isEmpty: true, isPossible: false },
      { diskId: "g3", color: null, isEmpty: true, isPossible: false },
      { diskId: "g4", color: null, isEmpty: true, isPossible: false },
      { diskId: "g5", color: null, isEmpty: true, isPossible: false },
      { diskId: "g6", color: null, isEmpty: true, isPossible: false },
      { diskId: "g7", color: null, isEmpty: true, isPossible: false },
    ],
    [
      { diskId: "h0", color: null, isEmpty: true, isPossible: false },
      { diskId: "h1", color: null, isEmpty: true, isPossible: false },
      { diskId: "h2", color: null, isEmpty: true, isPossible: false },
      { diskId: "h3", color: null, isEmpty: true, isPossible: false },
      { diskId: "h4", color: null, isEmpty: true, isPossible: false },
      { diskId: "h5", color: null, isEmpty: true, isPossible: false },
      { diskId: "h6", color: null, isEmpty: true, isPossible: false },
      { diskId: "h7", color: null, isEmpty: true, isPossible: false },
    ],
  ],
  playerTurn: "black",
  blackNumber: 2, // number of each color disks
  purpleNumber: 2,


  endOfPossibilities: false,
  // Boolean to detect all Possibilities for two colors have ended

  endGame: false,
  // true means we have a winner

  showModal: false, // state to handle modal
  modalText: "",
}

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    diskClicked: (state, action: PayloadAction<{ diskId: string, isEmpty: boolean, isPossible: boolean }>) => { // disk click Handler 
      state.disks = disksClickHandler(state, action.payload);
    },
    changePlayerTurn: (state) => { // change player turn to play
      state.playerTurn = (state.playerTurn == "black" ? "purple" : "black");
    },
    setPossibleMoves: (state) => { // find possible moves for next player
      state.disks = findPossibleMoves(state);
    },
    setDiskQuantities: (state, action: PayloadAction<{ blackQuantity: number, purpleQuantity: number }>) => { // counting the disks quantity in playground to show the in info section
      state.blackNumber = action.payload.blackQuantity;
      state.purpleNumber = action.payload.purpleQuantity;
    },
    setEndOfPossibilities: (state, action: PayloadAction<boolean>) => { // check the situation which no player have possible moves
      state.endOfPossibilities = action.payload;
    },
    setEndGame: (state) => { // set the end of the game
      state.endGame = true;
    } , 
    setModalText: (state , action : PayloadAction<string>) => { // set the text info and trigger for final modal
      state.modalText = action.payload;
      state.showModal = true;
    } ,
    gameReset : (state) =>  initialState , // reset the game
  }
})


export default playgroundSlice.reducer;

export const { diskClicked, changePlayerTurn, setPossibleMoves , setDiskQuantities, setEndOfPossibilities, setEndGame , setModalText , gameReset} = playgroundSlice.actions;