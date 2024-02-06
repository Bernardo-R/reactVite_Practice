const ChildToParent = ({ callback }) => {
  const message = "Hello World";

  return <button onClick={() => callback(message)}>click for Message!</button>;
};

export default ChildToParent;
