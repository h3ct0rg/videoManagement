import React, { useState, useEffect } from 'react';
import '../../../assets/styles/Users.css';
import { getUsers } from '../../../services/userService';


interface User {
  firstName: string;
  lastName: string;
  userName: string;
  selected: boolean;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
        console.log("entre");
      try {
        const data = await getUsers();
        console.log(data);
        setUsers(data.map((user: any) => ({
          ...user,
          selected: false,
        })));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectUser = (index: number) => {
    const updatedUsers = [...users];
    updatedUsers[index].selected = !updatedUsers[index].selected;
    setUsers(updatedUsers);
  };

  const handleCreateUser = () => {
    alert('Add User');
  };

  const handleProfileClick = (userName: string) => {
    alert(`Show Profile of ${userName}`);
  };

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.userName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Paginación
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="users-container">
      <h2>Users</h2>
      <div className="users-header">
        <input
          type="text"
          placeholder="Search User..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleCreateUser} className="create-user-button">
          Add User
        </button>
      </div>
      <table className="users-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Select</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.userName}</td>
              <td>
                <input
                  type="checkbox"
                  checked={user.selected}
                  onChange={() => handleSelectUser(indexOfFirstUser + index)}
                />
              </td>
              <td>
                <button
                  className="profile-button"
                  onClick={() => handleProfileClick(user.userName)}
                >
                  Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`page-button ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
