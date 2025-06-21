import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen p-6 bg-background text-dark font-sans">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-base text-dark/70 mb-6">
        The page you're looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};
