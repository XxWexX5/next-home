export const ButtonPrimary = ({ ...props }) => {
  return (
    <button
      className="border-2 bg-primary-300 text-neutral-full text-lg font-bold py-2 rounded-full w-36 transition-all hover:bg-transparent hover:border-primary-300 hover:text-primary-300"
      {...props}
    ></button>
  );
};
