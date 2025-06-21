import { ACTIONS } from "../../consts";
import { Delete } from "lucide-react";
import { KeyboardBtn } from "./KeyboardBtn";
import { keyboardRows } from "./consts";

interface KeyboardProps {
  emit: (action: string, data?: any) => void;
  disabled?: boolean;
}

export const Keyboard = ({ emit, disabled = false }: KeyboardProps) => {
  const handleCharClick = (char: string) => {
    emit(ACTIONS.CHAR, char);
  };

  const handleBackspace = () => {
    emit(ACTIONS.BACKSPACE, null);
  };

  const handleEnter = () => {
    emit(ACTIONS.ENTER, null);
  };

  const renderBtnKey = (key: string | React.ReactNode) => {
    if (key === "ENTER")
      return (
        <KeyboardBtn
          key="ENTER"
          keySymbol="ENTER"
          handleClick={handleEnter}
          variant={ACTIONS.ENTER}
          disabled={disabled}
        />
      );

    if (key === "BACKSPACE")
      return (
        <KeyboardBtn
          key="BACKSPACE"
          keySymbol={<Delete className="w-5 h-5" />}
          handleClick={handleBackspace}
          variant={ACTIONS.BACKSPACE}
          disabled={disabled}
        />
      );

    const char = key as string;
    return (
      <KeyboardBtn
        key={char}
        keySymbol={char}
        handleClick={() => handleCharClick(char)}
        disabled={disabled}
      />
    );
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      {keyboardRows.map((row, idx) => (
        <div key={idx} className="flex justify-center gap-1">
          {row.map(renderBtnKey)}
        </div>
      ))}
    </div>
  );
};
