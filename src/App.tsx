import { RouterProvider } from "react-router-dom";
import { ActionListenerProvider } from "./context/ActionListenerContext";
import { router } from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ActionListenerProvider>
        <RouterProvider router={router} />
      </ActionListenerProvider>
    </QueryClientProvider>
  );
};

export default App;
