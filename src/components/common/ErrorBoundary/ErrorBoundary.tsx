import { useRouteError } from "react-router-dom";
import { SomethingWentWrong } from "../SomethingWentWrong/SomethingWentWrong";

export const ErrorBoundaryReactRouter = () => {
  const error = useRouteError();
  console.error("Error caught by boundary:", error);

  return <SomethingWentWrong />;
};
