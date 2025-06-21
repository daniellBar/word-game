import { WordRow } from "./components/WordRow/WordRow";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { useRegisterListeners } from "./useRegisterListeners";
import { useGameHandlers } from "./useGameHandlers";
import type { ChangeEvent } from "react";

export const GamePage = () => {
  const {
    letters,
    status,
    onChar,
    onBackspace,
    onEnter,
    letterCount,
    setLetterCount,
    disabled,
  } = useGameHandlers();

  const { emit } = useRegisterListeners({ onChar, onBackspace, onEnter });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const count = Number(e.target.value);
    if (!isNaN(count) && count > 0 && count <= 10) {
      setLetterCount(count);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 mt-5">
      <div className="flex items-center justify-center gap-2">
        <label
          htmlFor="letter-count"
          className="text-sm font-medium text-gray-700"
        >
          Letters per word:
        </label>
        <input
          type="number"
          min={1}
          max={10}
          value={letterCount}
          onChange={handleChange}
          className="p-1 border rounded w-20 text-center"
          disabled={disabled}
        />
      </div>

      <WordRow letters={letters} status={status} letterCount={letterCount} />
      <Keyboard emit={emit} disabled={disabled} />
    </div>
  );
};
