const API_URL = `${process.env.REACT_APP_API_URL}/groups`;

export const getGroups = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch groups');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching groups:', error);
    return [
      { groupName: 'Admins', selected: false },
      { groupName: 'Editors', selected: false },
      { groupName: 'Viewers', selected: false },
    ];  // this return is forced to return something to avoid the error if the backend is not implemented
  }
};
