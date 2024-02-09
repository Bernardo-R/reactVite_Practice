import React from "react";

const Child = (props) => {
  const { count, setCount } = props;

  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => countsetCount(count - 2)}>-</button>
    </div>
  );
};

export default Child;
