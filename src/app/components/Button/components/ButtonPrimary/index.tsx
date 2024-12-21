export const ButtonPrimary = ({ ...props }) => {
  return (
    <button
      className="w-full uppercase border-2 border-primary-300 bg-primary-300 text-neutral-full font-medium text-base py-2 rounded-full transition-all hover:bg-transparent hover:border-primary-300 hover:text-primary-300"
      {...props}
    ></button>
  );
};
