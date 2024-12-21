export const ButtonOutline = ({ ...props }) => {
  return (
    <button
      {...props}
      className={`w-full uppercase border-2 border-primary-300 text-primary-300 text-lg font-medium py-2 rounded-full transition-all hover:bg-primary-300 hover:text-neutral-full ${props.className}`}
    ></button>
  );
};
