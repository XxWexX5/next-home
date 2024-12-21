export const ButtonOutline = ({ ...props }) => {
  return (
    <button
      className="border-2 border-primary-300 text-primary-300 text-lg font-bold py-2 rounded-full w-36 transition-all hover:bg-transparent hover:bg-primary-300 hover:text-neutral-full"
      {...props}
    ></button>
  );
};
