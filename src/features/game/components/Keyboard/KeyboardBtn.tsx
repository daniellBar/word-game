import clsx from "clsx";
import type { ReactNode } from "react";
import type { ActionType } from "../../types";

interface KeyboardBtnProps {
  keySymbol: ReactNode;
  handleClick: () => void;
  variant?: ActionType;
  disabled?: boolean;
}

export const KeyboardBtn = ({
  keySymbol,
  handleClick,
  variant = "CHAR",
  disabled = false,
}: KeyboardBtnProps) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type="button"
      className={clsx(
        "h-12 rounded font-semibold text-sm transition-colors flex items-center justify-center",
        "bg-key-bg text-key-text hover:bg-key-bg-hover",
        variant === "CHAR" && "w-10",
        variant === "BACKSPACE" && "w-14",
        variant === "ENTER" && "w-16",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-key-bg-hover"
      )}
    >
      {keySymbol}
    </button>
  );
};
