import React, { useState, useEffect } from 'react';
import '../../../assets/styles/Roles.css';
import { getRoles } from '../../../services/RolesService';

interface Role {
  roleName: string;
  selected: boolean;
}

const initialRoles: Role[] = [
  { roleName: 'Admin', selected: false },
  { roleName: 'Editor', selected: false },
  { roleName: 'Viewer', selected: false },
];

const Roles = () => {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rolesPerPage = 3;

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await getRoles();
        setRoles(data.map((role: any) => ({
          ...role,
          selected: false, // Add the selected field
        })));
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectRole = (index: number) => {
    const updatedRoles = [...roles];
    updatedRoles[index].selected = !updatedRoles[index].selected;
    setRoles(updatedRoles);
  };

  const handleCreateRole = () => {
    alert('Add Rol');
  };

  const handleProfileClick = (roleName: string) => {
    alert(`View profile of ${roleName}`);
  };

  const filteredRoles = roles.filter((role) =>
    role.roleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginación
  const indexOfLastRole = currentPage * rolesPerPage;
  const indexOfFirstRole = indexOfLastRole - rolesPerPage;
  const currentRoles = filteredRoles.slice(indexOfFirstRole, indexOfLastRole);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredRoles.length / rolesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="roles-container">
      <h2>Roles</h2>
      <div className="roles-header">
        <input
          type="text"
          placeholder="Sarch rol..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleCreateRole} className="create-role-button">
          New Rol
        </button>
      </div>
      <table className="roles-table">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Select</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {currentRoles.map((role, index) => (
            <tr key={index}>
              <td>{role.roleName}</td>
              <td>
                <input
                  type="checkbox"
                  checked={role.selected}
                  onChange={() => handleSelectRole(indexOfFirstRole + index)}
                />
              </td>
              <td>
                <button
                  className="profile-button"
                  onClick={() => handleProfileClick(role.roleName)}
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

export default Roles;
