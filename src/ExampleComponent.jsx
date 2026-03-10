import { useState, useEffect } from 'react';

const UserProfile = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://api.example.com/users/${props.userId}`
        );
        if (!response.ok) throw new Error('User not found');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [props.userId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <a href={user.website} target="_blank" rel="noreferrer">
        Website
      </a>
      <button onClick={() => props.onEdit(user)}>Edit</button>
      <button onClick={() => props.onDelete(user.id)}>Delete</button>
    </div>
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setSelectedUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && (
        <UserProfile
          userId={selectedUser.id}
          onEdit={(user) => console.log('Edit user:', user)}
          onDelete={(id) => {
            setUsers(users.filter((u) => u.id !== id));
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
};

export default UserList;
