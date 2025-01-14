export const CircleIndicatorOutline = ({ ...props }) => {
  return (
    <div
      className={`size-[32px] text-center items-center justify-center bg-transparent text-primary-300 border-2 border-primary-300 rounded-full font-bold text-lg cursor-pointer transition-all hover:bg-primary-300 hover:text-neutral-full ${props.className}`}
      {...props}
    ></div>
  );
};
