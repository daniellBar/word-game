import { createBrowserRouter } from "react-router-dom";
import { CLIENT_ROUTES } from "./routes";
import { GamePage } from "../features/game/GamePage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { PageLayout } from "../layout/PageLayout/PageLayout";
import { ErrorBoundaryReactRouter } from "../components/common/ErrorBoundary/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: CLIENT_ROUTES.Main,
    element: <PageLayout />,
    children: [
      {
        index: true,
        errorElement: <ErrorBoundaryReactRouter />,
        element: <GamePage />,
      },
      {
        path: "*",
        errorElement: <ErrorBoundaryReactRouter />,
        element: <NotFoundPage />,
      },
    ],
  },
]);
