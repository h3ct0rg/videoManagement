import React, { useState, useEffect } from 'react';
import '../../../assets/styles/Groups.css';
import { getGroups } from '../../../services/groupsService';


interface Group {
  groupName: string;
  selected: boolean;
}

const initialGroups: Group[] = [];

const Groups = () => {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const groupsPerPage = 3;

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const data = await getGroups();
        setGroups(data.map((group: any) => ({
          ...group,
          selected: false,
        })));
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectGroup = (index: number) => {
    const updatedGroups = [...groups];
    updatedGroups[index].selected = !updatedGroups[index].selected;
    setGroups(updatedGroups);
  };

  const handleCreateGroup = () => {
    alert('Create a new group');
  };

  const handleProfileClick = (groupName: string) => {
    alert(`View profile of ${groupName}`);
  };

  const filteredGroups = groups.filter((group) =>
    group.groupName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastGroup = currentPage * groupsPerPage;
  const indexOfFirstGroup = indexOfLastGroup - groupsPerPage;
  const currentGroups = filteredGroups.slice(indexOfFirstGroup, indexOfLastGroup);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredGroups.length / groupsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="groups-container">
      <h2>Groups</h2>
      <div className="groups-header">
        <input
          type="text"
          placeholder="Search group..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleCreateGroup} className="create-group-button">
          Create New Group
        </button>
      </div>
      <table className="groups-table">
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Select</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {currentGroups.map((group, index) => (
            <tr key={index}>
              <td>{group.groupName}</td>
              <td>
                <input
                  type="checkbox"
                  checked={group.selected}
                  onChange={() => handleSelectGroup(indexOfFirstGroup + index)}
                />
              </td>
              <td>
                <button
                  className="profile-button"
                  onClick={() => handleProfileClick(group.groupName)}
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

export default Groups;
