import React from "react";

interface DiskTypes {
    disk : string ,
    isEmpty : boolean ,
    isPossible : boolean ,
    color : string | null ,
    handler : () => void
}

const Disks = ({ handler, disk, isEmpty, isPossible , color } : DiskTypes): JSX.Element => {
  return (
    <div>
      <div
        className="w-[32px] h-[32px] border rounded-md shadow-neu-field m-1 transition-all duration-200 ease-linear hover:translate-y-[-1px] hover:shadow-none 2xl:w-[75px] 2xl:h-[75px] 2xl:rounded-lg 2xl:shadow-neu-field-lg 2xl:m-3 xl:w-[65px] xl:h-[65px] md:w-[50px] md:h-[50px] md:m-1"
        // onClick={() => handler(name, empty, isPossible, true)}
      >
        <div
          className={`w-3/5 h-3/5 rounded-full shadow-neu-disk ${
            (color === "black" && "bg-dark") ||
            (color === "purple" && "bg-purple") ||
            (isPossible && "bg-primaryColor")
          } ${
            isPossible ? "w-1/3 h-1/3 opacity-50" : "w-3/5 h-3/5 opacity-100"
          }
          `}
        />
      </div>
    </div>
  );
};

export default Disks;
