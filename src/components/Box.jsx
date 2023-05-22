import { useState, useEffect } from "react";
import "./Box.css";
const Box = ({ count }) => {
  const [user, setUser] = useState({});
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${index}`);
        const data = await response.json();
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, [index]);

  return (
    <div className="box">
      <button onClick={() => setIndex(index + 1)}>
        Show a random user from the list below{" "}
      </button>

      {user && <p key={user.id}>{user.name}</p>}
    </div>
  );
};

export default Box;
