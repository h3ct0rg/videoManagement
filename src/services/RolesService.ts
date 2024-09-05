const API_URL = `${process.env.REACT_APP_API_URL}/roles`;

export const getRoles = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch roles');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching roles:', error);
    return [
      { roleName: 'Admins', selected: false },
      { roleName: 'Editors', selected: false },
      { roleName: 'Viewers', selected: false },
    ];  // this return is forced to return something to avoid the error if the backend is not implemented
  }
};
