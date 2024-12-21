export const Container = ({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div className={`w-full container mx-auto px-4 ${props.className}`}>
      {children}
    </div>
  );
};
