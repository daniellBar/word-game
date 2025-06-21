import { createRange } from "../../../../utils/utils";
import type { Status } from "../../types";
import { animationClassMap, borderColorMap } from "./consts";

interface WordRowProps {
  letters: string[];
  status: Status | null;
  letterCount: number;
}

export const WordRow = ({ letters, status, letterCount }: WordRowProps) => {
  return (
    <div className="flex gap-2.5">
      {createRange(letterCount, (i) => (
        <div
          key={i}
          className={`w-12 h-12 border-2 ${
            borderColorMap[status ?? "default"]
          } ${
            letters[i] ? animationClassMap[status ?? "default"] : ""
          } flex justify-center items-center text-2xl`}
        >
          {letters[i] || ""}
        </div>
      ))}
    </div>
  );
};
