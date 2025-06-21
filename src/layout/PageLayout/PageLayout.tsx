import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start py-10 px-4">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};
