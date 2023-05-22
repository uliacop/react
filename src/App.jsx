import { useState } from "react";
import Box from "./components/Box";
import Box1 from "./components/Box1";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>App Components</h1>
      <button onClick={() => setIsOpen(!isOpen)}>Show users</button>
      {isOpen && <Box count={count} />}
      {isOpen && <Box1 />}
    </div>
  );
}
