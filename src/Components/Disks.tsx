import { useAppDispatch } from "../app/reduxHooks";

// Redux actions
import { changePlayerTurn, diskClicked, setPossibleMoves } from "../features/playground/playgroundSlice";

export interface DiskTypes {
  diskId: string;
  isEmpty: boolean;
  isPossible: boolean;
  color: string | null;
}

const Disks = ({
  diskId,
  isEmpty,
  isPossible,
  color,
}: DiskTypes): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div
        id="disk-container"
        className="flex flex-row justify-between items-center w-[32px] h-[32px] border rounded-md shadow-neu-field m-1 transition-all duration-200 ease-linear hover:translate-y-[-1px] hover:shadow-none 2xl:w-[75px] 2xl:h-[75px] 2xl:rounded-lg 2xl:shadow-neu-field-lg 2xl:m-3 xl:w-[65px] xl:h-[65px] md:w-[50px] md:h-[50px] md:m-1"
        onClick={() => {
          if (isEmpty && isPossible) { // playable if the disk is empty and possible to play
            dispatch(diskClicked({ diskId, isEmpty, isPossible }));
            dispatch(changePlayerTurn());
            dispatch(setPossibleMoves());
          }
        }}
      >
        <div // disks change style based on their situations
          id="disks"
          className={`rounded-full shadow-neu-disk m-auto ${
            (color === "black" && "bg-dark") ||
            (color === "purple" && "bg-purple") ||
            (isPossible && "bg-primaryColor")
          } ${isPossible ? "w-1/4 h-1/4 opacity-50" : "w-3/5 h-3/5 opacity-100"}
          `}
        />
      </div>
    </div>
  );
};

export default Disks;
