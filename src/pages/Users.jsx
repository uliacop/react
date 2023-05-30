import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchAllUsers();
  }, []);
  return (
    <div>
      <h1>All users:</h1>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default Users;
