import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(100);
  const [isOpen, setIsOpen] = useState(false);
  const handleIncrement = () => {
    setValue((prevState) => ++prevState);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };
  return (
    <>
      <div>Counter:{value}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default Counter;
