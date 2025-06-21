import { useEffect } from "react";
import { useActionListener } from "../../context/ActionListenerContext";
import { ACTIONS } from "./consts";

interface UseRegisterListenersArgs {
  onChar: (char: string) => void;
  onBackspace: () => void;
  onEnter: () => void;
}

export const useRegisterListeners = ({
  onChar,
  onBackspace,
  onEnter,
}: UseRegisterListenersArgs) => {
  const action = useActionListener();

  useEffect(() => {
    action.registerListener(ACTIONS.CHAR, onChar);
    action.registerListener(ACTIONS.BACKSPACE, onBackspace);
    action.registerListener(ACTIONS.ENTER, onEnter);

    return () => {
      action.removeListener(ACTIONS.CHAR);
      action.removeListener(ACTIONS.BACKSPACE);
      action.removeListener(ACTIONS.ENTER);
    };
  }, [action, onChar, onBackspace, onEnter]);

   return { emit: action.emit };
};
