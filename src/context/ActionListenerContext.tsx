import { createContext, useContext, useMemo, type ReactNode } from "react";
import { MyActionListener } from "../utils/action-listener/MyActionListener";

const ActionListenerContext = createContext<MyActionListener | null>(null);

export const ActionListenerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const instance = useMemo(() => new MyActionListener(), []);

  return (
    <ActionListenerContext.Provider value={instance}>
      {children}
    </ActionListenerContext.Provider>
  );
};

export const useActionListener = (): MyActionListener => {
  const ctx = useContext(ActionListenerContext);
  if (!ctx) {
    throw new Error(
      "useActionListener must be used within <ActionListenerProvider>"
    );
  }
  return ctx;
};
