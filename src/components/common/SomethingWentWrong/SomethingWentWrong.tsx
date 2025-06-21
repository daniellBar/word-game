export const SomethingWentWrong = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-background text-dark shadow-md max-w-md mx-auto mt-20 font-sans">
      <h1 className="text-2xl font-semibold mb-2 text-error">
        Oops... Something went wrong
      </h1>
      <p className="text-base text-dark/80">
        Please refresh the page or try again later.
      </p>
    </div>
  );
};
