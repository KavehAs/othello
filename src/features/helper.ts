import cloneDeep from 'lodash/cloneDeep'
import { playgroundType } from "./playground/playgroundSlice";

type DisksColor = "black" | "purple";
type Disks = {
    diskId: string, color: null | "purple" | "black", isEmpty: boolean, isPossible: boolean
}[][];

const orderOfRowsName = ["a", "b", "c", "d", "e", "f", "g", "h"];  // we get row index of disks array of object with this order

export const disksClickHandler = (playGroundData: playgroundType, payload: { diskId: string, isEmpty: boolean, isPossible: boolean }): Disks => {
    // if conditions are true , we get effected disks by played move
    // and change their states with a loop based on the findEffectedDisks function output
    const { diskId, isEmpty, isPossible } = payload;

    if ((isEmpty && isPossible)) {
        const clonedData = cloneDeep(playGroundData);
        let newDisksData: Disks = clonedData.disks;
        let clickedColor: DisksColor = clonedData.playerTurn;

        const diskRowIndex = orderOfRowsName.indexOf(diskId.split("")[0]);
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
    // with this function we find any disks which can be effected by player moves 
    // we use the result to change colors after the move and show guides to player

    const clonedData = cloneDeep(playGroundData);

    let clickedColor: DisksColor = clonedData.playerTurn === "black" ? "black" : "purple";
    let opponentColor: DisksColor = clonedData.playerTurn === "purple" ? "black" : "purple";

    const diskRowIndex = orderOfRowsName.indexOf(diskId.split("")[0]);
    const diskColumnIndex = Number(diskId.split("")[1]);
    // getting number of row and column 

    const upperDisksChanged: string[] =
        diskRowIndex > 0
            ? changeUpperDisksColor(
                clonedData,
                diskRowIndex,
                diskColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const belowDisksChanged: string[] =
        diskRowIndex < 7
            ? changeBelowDisksColor(
                clonedData,
                diskRowIndex,
                diskColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const leftDisksChanged: string[] =
        diskColumnIndex > 0
            ? changeLeftDisksColor(
                clonedData,
                diskRowIndex,
                diskColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const rightDisksChanged: string[] =
        diskColumnIndex < 7
            ? changeRightDisksColor(
                clonedData,
                diskRowIndex,
                diskColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const upRightDisksChanged: string[] =
        diskColumnIndex < 7 && diskRowIndex > 0
            ? changeUpRightDisksColor(
                clonedData,
                diskRowIndex,
                diskColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const belowRightDisksChanged: string[] =
        diskColumnIndex < 7 && diskRowIndex < 7
            ? changeBelowRightDisksColor(
                clonedData,
                diskRowIndex,
                diskColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const upLeftDisksChanged: string[] =
        diskColumnIndex > 0 && diskRowIndex > 0
            ? changeUpLeftDisksColor(
                clonedData,
                diskRowIndex,
                diskColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const belowLeftDisksChanged: string[] =
        diskColumnIndex > 0 && diskRowIndex < 7
            ? changeBelowLeftDisksColor(
                clonedData,
                diskRowIndex,
                diskColumnIndex,
                opponentColor,
                clickedColor
            )
            : [];

    const allDisksChangedColor: string[] = [
        ...upperDisksChanged,
        ...belowDisksChanged,
        ...rightDisksChanged,
        ...leftDisksChanged,
        ...upRightDisksChanged,
        ...belowRightDisksChanged,
        ...upLeftDisksChanged,
        ...belowLeftDisksChanged,
    ];

    return allDisksChangedColor;
};


// these functions find possible effected disks in 8 directions
function changeUpperDisksColor(
    playGroundData: playgroundType,
    diskRowIndex: number,
    diskColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let upperDisksChanged = []; // list of disk fields which must change color in up direction
    for (let row = diskRowIndex - 1; row >= 0; row--) {
        if (disks[row][diskColumnIndex].color === opponentColor && row === 0) {
            upperDisksChanged = [];
            break;
        } else if (disks[row][diskColumnIndex].color === clickedColor) {
            break;
        } else if (disks[row][diskColumnIndex].color === opponentColor) {
            upperDisksChanged.push(disks[row][diskColumnIndex].diskId);
        } else {
            upperDisksChanged = [];
            break;
        }
    }

    return upperDisksChanged;
};

function changeBelowDisksColor(
    playGroundData: playgroundType,
    diskRowIndex: number,
    diskColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let belowDisksChanged = []; // list of disk fields which must change color in up direction

    for (let row = diskRowIndex + 1; row <= 7; row++) {
        if (disks[row][diskColumnIndex].color === opponentColor && row === 7) {
            belowDisksChanged = [];
            break;
        } else if (disks[row][diskColumnIndex].color === clickedColor) {
            break;
        } else if (disks[row][diskColumnIndex].color === opponentColor) {
            belowDisksChanged.push(disks[row][diskColumnIndex].diskId);
        } else {
            belowDisksChanged = [];
            break;
        }
    }

    return belowDisksChanged;
};

function changeLeftDisksColor(
    playGroundData: playgroundType,
    diskRowIndex: number,
    diskColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let leftDisksChanged = []; // list of disk fields which must change color in up direction

    for (let column = diskColumnIndex - 1; column >= 0; column--) {
        if (disks[diskRowIndex][column].color === opponentColor && column === 0) {
            leftDisksChanged = [];
            break;
        } else if (disks[diskRowIndex][column].color === clickedColor) {
            break;
        } else if (disks[diskRowIndex][column].color === opponentColor) {
            leftDisksChanged.push(disks[diskRowIndex][column].diskId);
        } else {
            leftDisksChanged = [];
            break;
        }
    }

    return leftDisksChanged;
};

function changeRightDisksColor(
    playGroundData: playgroundType,
    diskRowIndex: number,
    diskColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let rightDisksChanged = []; // list of disk fields which must change color in up direction

    for (let column = diskColumnIndex + 1; column <= 7; column++) {
        if (disks[diskRowIndex][column].color === opponentColor && column === 7) {
            rightDisksChanged = [];
            break;
        } else if (disks[diskRowIndex][column].color === clickedColor) {
            break;
        } else if (disks[diskRowIndex][column].color === opponentColor) {
            rightDisksChanged.push(disks[diskRowIndex][column].diskId);
        } else {
            rightDisksChanged = [];
            break;
        }
    }
    return rightDisksChanged;
};

function changeUpRightDisksColor(
    playGroundData: playgroundType,
    diskRowIndex: number,
    diskColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let upRightDisksChanged = []; // list of disk fields which must change color in up direction
    let row = diskRowIndex - 1,
        column = diskColumnIndex + 1;
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
    diskRowIndex: number,
    diskColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let belowRightDisksChanged = []; // list of disk fields which must change color in below direction
    let row = diskRowIndex + 1,
        column = diskColumnIndex + 1;
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
    diskRowIndex: number,
    diskColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let upLeftDisksChanged = []; // list of disk fields which must change color in up direction
    let row = diskRowIndex - 1,
        column = diskColumnIndex - 1;
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
    diskRowIndex: number,
    diskColumnIndex: number,
    opponentColor: DisksColor,
    clickedColor: DisksColor,
) {
    const { disks } = playGroundData;
    let belowLeftDisksChanged = []; // list of disk fields which must change color in up direction
    let row = diskRowIndex + 1,
        column = diskColumnIndex - 1;
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
    // this action leads to show a guid circle in the disk field

    let disks = cloneDeep(playGroundData.disks);

    for (const row of disks) {
        for (const disk of row) {
            if (disk.isEmpty) {
                let possibleDisks = findEffectedDisks(playGroundData, disk.diskId);
                disk.isPossible = possibleDisks.length > 0 ? true : false;
            }
        }
    }
    return disks;
}