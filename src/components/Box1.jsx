import { useState, useEffect } from "react";
const Box1 = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("HTTP error");
        }
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="box">
      {isLoading && <h1>Loading...</h1>}
      {error && <h2>Something went wrong...</h2>}
      {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

export default Box1;
