// i am not using this in the code right now. it is just an example.
// in a more "react" way it would be nicer to use a function like this
// instead of a Class which react does not like
// then it can be used inside the context like this: const actionListenerRef = useRef(createActionListener());

import type { ActionListener, Listener } from "./types";

export const createActionListener = (): ActionListener => {
  const actions = new Map<string, Listener[]>();

  const registerListener = (action: string, listener: Listener) => {
    if (!actions.has(action)) {
      actions.set(action, []);
    }
    actions.get(action)!.push(listener);
  };

  const removeListener = (action: string) => {
    actions.delete(action);
  };

  const emit = (action: string, data: any) => {
    if (!actions.has(action)) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
    }
    actions.get(action)!.forEach((listener) => listener(data));
  };

  return { registerListener, removeListener, emit };
};
