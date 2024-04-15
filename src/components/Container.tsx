type PropsTypes = {
  children: React.ReactNode;
};

const Container = ({ children }: PropsTypes) => {
  return <div className="container">{children}</div>;
};

export default Container;
