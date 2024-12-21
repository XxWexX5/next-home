export const ButtonPrimary = ({ ...props }) => {
  return (
    <button
      className="uppercase border-2 border-primary-300 bg-primary-300 text-neutral-full font-medium text-base py-2 rounded-full w-36 transition-all hover:bg-transparent hover:border-primary-300 hover:text-primary-300"
      {...props}
    ></button>
  );
};
