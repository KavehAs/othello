import cloneDeep from 'lodash/cloneDeep'
import { playgroundType } from "./playground/playgroundSlice";

type DisksColor = "black" | "purple";
type Disks = {
    diskId: string, color: null | "purple" | "black", isEmpty: boolean, isPossible: boolean
}[][];

export const disksClickHandler = (playGroundData: playgroundType, payload: { diskId: string, isEmpty: boolean, isPossible: boolean }): Disks => {
    // if conditions are true , we get effected nuts by played move
    // and change their states with a loop based on the findEffectedNuts function output
    const { diskId, isEmpty, isPossible } = payload;

    if ((isEmpty && isPossible)) {
        const clonedData = cloneDeep(playGroundData);
        let newDisksData: Disks = clonedData.disks;
        let clickedColor: DisksColor = clonedData.playerTurn;

        const diskRowIndex = clonedData.orderOfRowsName.indexOf(diskId.split("")[0]);
        const diskColumnIndex = Number(diskId.split("")[1]);

        let result = findEffectedDisks(clonedData, diskId);
        for (const row of newDisksData) {
            for (const disk of row) {
                disk.color = result.includes(disk.diskId) ? clickedColor : disk.color;
            }
        }
        newDisksData[diskRowIndex][diskColumnIndex].color = clickedColor;
        newDisksData[diskRowIndex][diskColumnIndex].isEmpty = false;
        newDisksData[diskRowIndex][diskColumnIndex].isPossible = false;

        return newDisksData;
    } else {
        return playGroundData.disks;
    }

};


function findEffectedDisks(playGroundData: playgroundType, diskId: string) {
    // with this function we find any nuts which can be effected by player moves 
    // we use the result to change colors after the move and show guides to player

    const clonedData = cloneDeep(playGroundData);

    let clickedColor: DisksColor = clonedData.playerTurn === "black" ? "black" : "purple";
    let opponentColor: DisksColor = clonedData.playerTurn === "purple" ? "black" : "purple";

    const nutRowIndex = clonedData.orderOfRowsName.indexOf(diskId.split("")[0]);
    const nutColumnIndex = Number(diskId.split("")[1]);
    // getting number of row and column 

    const upperNutsChanged: string[] =
        nutRowIndex > 0
            ? changeUpperDisksColor(
                clonedData,
                nutRowIndex,
                nutColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const belowNutsChanged: string[] =
        nutRowIndex < 7
            ? changeBelowDisksColor(
                clonedData,
                nutRowIndex,
                nutColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const leftNutsChanged: string[] =
        nutColumnIndex > 0
            ? changeLeftDisksColor(
                clonedData,
                nutRowIndex,
                nutColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const rightNutsChanged: string[] =
        nutColumnIndex < 7
            ? changeRightDisksColor(
                clonedData,
                nutRowIndex,
                nutColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const upRightNutsChanged: string[] =
        nutColumnIndex < 7 && nutRowIndex > 0
            ? changeUpRightDisksColor(
                clonedData,
                nutRowIndex,
                nutColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const belowRightNutsChanged: string[] =
        nutColumnIndex < 7 && nutRowIndex < 7
            ? changeBelowRightDisksColor(
                clonedData,
                nutRowIndex,
                nutColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const upLeftNutsChanged: string[] =
        nutColumnIndex > 0 && nutRowIndex > 0
            ? changeUpLeftDisksColor(
                clonedData,
                nutRowIndex,
                nutColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const belowLeftNutsChanged: string[] =
        nutColumnIndex > 0 && nutRowIndex < 7
            ? changeBelowLeftDisksColor(
                clonedData,
                nutRowIndex,
                nutColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const allNutsChangedColor: string[] = [
        ...upperNutsChanged,
        ...belowNutsChanged,
        ...rightNutsChanged,
        ...leftNutsChanged,
        ...upRightNutsChanged,
        ...belowRightNutsChanged,
        ...upLeftNutsChanged,
        ...belowLeftNutsChanged,
    ];

    return allNutsChangedColor;
};


// these functions find possible effected nuts in 8 directions
function changeUpperDisksColor(
    playGroundData: playgroundType,
    nutRowIndex: number,
    nutColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let upperDisksChanged = []; // list of nut fields which must change color in up direction
    for (let row = nutRowIndex - 1; row >= 0; row--) {
        if (disks[row][nutColumnIndex].color === opponentColor && row === 0) {
            upperDisksChanged = [];
            break;
        } else if (disks[row][nutColumnIndex].color === clickedColor) {
            break;
        } else if (disks[row][nutColumnIndex].color === opponentColor) {
            upperDisksChanged.push(disks[row][nutColumnIndex].diskId);
        } else {
            upperDisksChanged = [];
            break;
        }
    }

    return upperDisksChanged;
};

function changeBelowDisksColor(
    playGroundData: playgroundType,
    nutRowIndex: number,
    nutColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let belowDisksChanged = []; // list of nut fields which must change color in up direction

    for (let row = nutRowIndex + 1; row <= 7; row++) {
        if (disks[row][nutColumnIndex].color === opponentColor && row === 7) {
            belowDisksChanged = [];
            break;
        } else if (disks[row][nutColumnIndex].color === clickedColor) {
            break;
        } else if (disks[row][nutColumnIndex].color === opponentColor) {
            belowDisksChanged.push(disks[row][nutColumnIndex].diskId);
        } else {
            belowDisksChanged = [];
            break;
        }
    }

    return belowDisksChanged;
};

function changeLeftDisksColor(
    playGroundData: playgroundType,
    nutRowIndex: number,
    nutColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let leftDisksChanged = []; // list of nut fields which must change color in up direction

    for (let column = nutColumnIndex - 1; column >= 0; column--) {
        if (disks[nutRowIndex][column].color === opponentColor && column === 0) {
            leftDisksChanged = [];
            break;
        } else if (disks[nutRowIndex][column].color === clickedColor) {
            break;
        } else if (disks[nutRowIndex][column].color === opponentColor) {
            leftDisksChanged.push(disks[nutRowIndex][column].diskId);
        } else {
            leftDisksChanged = [];
            break;
        }
    }

    return leftDisksChanged;
};

function changeRightDisksColor(
    playGroundData: playgroundType,
    nutRowIndex: number,
    nutColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let rightDisksChanged = []; // list of nut fields which must change color in up direction

    for (let column = nutColumnIndex + 1; column <= 7; column++) {
        if (disks[nutRowIndex][column].color === opponentColor && column === 7) {
            rightDisksChanged = [];
            break;
        } else if (disks[nutRowIndex][column].color === clickedColor) {
            break;
        } else if (disks[nutRowIndex][column].color === opponentColor) {
            rightDisksChanged.push(disks[nutRowIndex][column].diskId);
        } else {
            rightDisksChanged = [];
            break;
        }
    }
    return rightDisksChanged;
};

function changeUpRightDisksColor(
    playGroundData: playgroundType,
    nutRowIndex: number,
    nutColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let upRightDisksChanged = []; // list of nut fields which must change color in up direction
    let row = nutRowIndex - 1,
        column = nutColumnIndex + 1;
    while (row >= 0 && column <= 7) {
        if (
            disks[row][column].color === opponentColor &&
            (row === 0 || column === 7)
        ) {
            upRightDisksChanged = [];
            break;
        } else if (disks[row][column].color === clickedColor) {
            break;
        } else if (disks[row][column].color === opponentColor) {
            upRightDisksChanged.push(disks[row][column].diskId);
        } else {
            upRightDisksChanged = [];
            break;
        }

        row--;
        column++;
    }

    return upRightDisksChanged;
};

function changeBelowRightDisksColor(
    playGroundData: playgroundType,
    nutRowIndex: number,
    nutColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let belowRightDisksChanged = []; // list of nut fields which must change color in below direction
    let row = nutRowIndex + 1,
        column = nutColumnIndex + 1;
    while (row <= 7 && column <= 7) {
        if (
            disks[row][column].color === opponentColor &&
            (row === 7 || column === 7)
        ) {
            belowRightDisksChanged = [];
            break;
        } else if (disks[row][column].color === clickedColor) {
            break;
        } else if (disks[row][column].color === opponentColor) {
            belowRightDisksChanged.push(disks[row][column].diskId);
        } else {
            belowRightDisksChanged = [];
            break;
        }

        row++;
        column++;
    }

    return belowRightDisksChanged;
};

function changeUpLeftDisksColor(
    playGroundData: playgroundType,
    nutRowIndex: number,
    nutColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let upLeftDisksChanged = []; // list of nut fields which must change color in up direction
    let row = nutRowIndex - 1,
        column = nutColumnIndex - 1;
    while (row >= 0 && column >= 0) {
        if (
            disks[row][column].color === opponentColor &&
            (row === 0 || column === 0)
        ) {
            upLeftDisksChanged = [];
            break;
        } else if (disks[row][column].color === clickedColor) {
            break;
        } else if (disks[row][column].color === opponentColor) {
            upLeftDisksChanged.push(disks[row][column].diskId);
        } else {
            upLeftDisksChanged = [];
            break;
        }
        row--;
        column--;
    }

    return upLeftDisksChanged;
};

function changeBelowLeftDisksColor(
    playGroundData: playgroundType,
    nutRowIndex: number,
    nutColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let belowLeftDisksChanged = []; // list of nut fields which must change color in up direction
    let row = nutRowIndex + 1,
        column = nutColumnIndex - 1;
    while (row <= 7 && column >= 0) {
        if (
            disks[row][column].color === opponentColor &&
            (row === 7 || column === 0)
        ) {
            belowLeftDisksChanged = [];
            break;
        } else if (disks[row][column].color === clickedColor) {
            break;
        } else if (disks[row][column].color === opponentColor) {
            belowLeftDisksChanged.push(disks[row][column].diskId);
        } else {
            belowLeftDisksChanged = [];
            break;
        }

        row++;
        column--;
    }

    return belowLeftDisksChanged;
};

export const findPossibleMoves = (playGroundData: playgroundType) => {
    // find possible moves for each player and set item.isPossible to true for each disk
    // this action leads to show a guid circle in the nut field

    let disks = cloneDeep(playGroundData.disks);

    for (const row of disks) {
        for (const nut of row) {
            if (nut.isEmpty) {
                let possibleNuts = findEffectedDisks(playGroundData, nut.diskId);
                nut.isPossible = possibleNuts.length > 0 ? true : false;
            }
        }
    }
    return disks;
}