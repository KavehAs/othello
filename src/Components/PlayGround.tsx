import React from "react";
import { useAppSelector } from "../app/reduxHooks";
import Disks from "./Disks";

const PlayGround = (): JSX.Element => {
  const playGroundData = useAppSelector((state) => state.playground);
  const {
    disks: [row1, row2, row3, row4, row5, row6, row7, row8],
  } = playGroundData;

  return (
    <div
      id="playground"
      className="w-full p-2 mt-[10px] flex flex-row justify-center items-center
        xl:w-[70%] xl:pt-16 lg:w-[75%] lg:p-8 md:p-5 sm:p-2 overflow-scroll overflow-x-hidden"
    >
      <div
        id="field"
        className="w-full mt-24 rounded-2xl p-3 grid grid-cols-8 grid-rows-8
            shadow-neu-ground lg:max-xl:p-2 sm:max-md:p-2 sm:max-md:rounded-xl"
      >
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
