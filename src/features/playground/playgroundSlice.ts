import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/reduxStore'

interface playgroundType {
    nuts: {
        name: string, color: null | "purple" | "black", empty: boolean, isPossible: boolean
    }[][] ,
    playerTurn : "black" | "purple" ,
    blackNumber : number , 
    purpleNumber : number , 
}

const initialState : playgroundType = {
      nuts: [
        // default properties of Nuts
        [
          { name: "a0", color: null, empty: true, isPossible: false },
          { name: "a1", color: null, empty: true, isPossible: false },
          { name: "a2", color: null, empty: true, isPossible: false },
          { name: "a3", color: null, empty: true, isPossible: false },
          { name: "a4", color: null, empty: true, isPossible: false },
          { name: "a5", color: null, empty: true, isPossible: false },
          { name: "a6", color: null, empty: true, isPossible: false },
          { name: "a7", color: null, empty: true, isPossible: false },
        ],
        [
          { name: "b0", color: null, empty: true, isPossible: false },
          { name: "b1", color: null, empty: true, isPossible: false },
          { name: "b2", color: null, empty: true, isPossible: false },
          { name: "b3", color: null, empty: true, isPossible: false },
          { name: "b4", color: null, empty: true, isPossible: false },
          { name: "b5", color: null, empty: true, isPossible: false },
          { name: "b6", color: null, empty: true, isPossible: false },
          { name: "b7", color: null, empty: true, isPossible: false },
        ],
        [
          { name: "c0", color: null, empty: true, isPossible: false },
          { name: "c1", color: null, empty: true, isPossible: false },
          { name: "c2", color: null, empty: true, isPossible: false },
          { name: "c3", color: null, empty: true, isPossible: true },
          { name: "c4", color: null, empty: true, isPossible: false },
          { name: "c5", color: null, empty: true, isPossible: false },
          { name: "c6", color: null, empty: true, isPossible: false },
          { name: "c7", color: null, empty: true, isPossible: false },
        ],
        [
          { name: "d0", color: null, empty: true, isPossible: false },
          { name: "d1", color: null, empty: true, isPossible: false },
          { name: "d2", color: null, empty: true, isPossible: true },
          { name: "d3", color: "purple", empty: false, isPossible: false },
          { name: "d4", color: "black", empty: false, isPossible: false },
          { name: "d5", color: null, empty: true, isPossible: false },
          { name: "d6", color: null, empty: true, isPossible: false },
          { name: "d7", color: null, empty: true, isPossible: false },
        ],
        [
          { name: "e0", color: null, empty: true, isPossible: false },
          { name: "e1", color: null, empty: true, isPossible: false },
          { name: "e2", color: null, empty: true, isPossible: false },
          { name: "e3", color: "black", empty: false, isPossible: false },
          { name: "e4", color: "purple", empty: false, isPossible: false },
          { name: "e5", color: null, empty: true, isPossible: true },
          { name: "e6", color: null, empty: true, isPossible: false },
          { name: "e7", color: null, empty: true, isPossible: false },
        ],
        [
          { name: "f0", color: null, empty: true, isPossible: false },
          { name: "f1", color: null, empty: true, isPossible: false },
          { name: "f2", color: null, empty: true, isPossible: false },
          { name: "f3", color: null, empty: true, isPossible: false },
          { name: "f4", color: null, empty: true, isPossible: true },
          { name: "f5", color: null, empty: true, isPossible: false },
          { name: "f6", color: null, empty: true, isPossible: false },
          { name: "f7", color: null, empty: true, isPossible: false },
        ],
        [
          { name: "g0", color: null, empty: true, isPossible: false },
          { name: "g1", color: null, empty: true, isPossible: false },
          { name: "g2", color: null, empty: true, isPossible: false },
          { name: "g3", color: null, empty: true, isPossible: false },
          { name: "g4", color: null, empty: true, isPossible: false },
          { name: "g5", color: null, empty: true, isPossible: false },
          { name: "g6", color: null, empty: true, isPossible: false },
          { name: "g7", color: null, empty: true, isPossible: false },
        ],
        [
          { name: "h0", color: null, empty: true, isPossible: false },
          { name: "h1", color: null, empty: true, isPossible: false },
          { name: "h2", color: null, empty: true, isPossible: false },
          { name: "h3", color: null, empty: true, isPossible: false },
          { name: "h4", color: null, empty: true, isPossible: false },
          { name: "h5", color: null, empty: true, isPossible: false },
          { name: "h6", color: null, empty: true, isPossible: false },
          { name: "h7", color: null, empty: true, isPossible: false },
        ],
      ] ,
      playerTurn: "black", // true is black turn and false is purple turn
      blackNumber: 2, // number of each color nuts
      purpleNumber: 2,
}

export const playgroundSlice = createSlice({
    name : 'playground' ,
    initialState , 
    reducers : {

    }

})


export default playgroundSlice.reducer;