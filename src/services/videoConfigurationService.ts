const API_URL = `${process.env.REACT_APP_API_URL}/videoconfiguration`;

export const getUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [
        { firstName: 'John', lastName: 'Doe', userName: 'johndoe', selected: false },
        { firstName: 'Jane', lastName: 'Smith', userName: 'janesmith', selected: false },
        { firstName: 'Alice', lastName: 'Johnson', userName: 'alicej', selected: false },
        { firstName: 'Bob', lastName: 'Williams', userName: 'bobw', selected: false },
        { firstName: 'Tom', lastName: 'Brown', userName: 'tomb', selected: false },
        { firstName: 'Anna', lastName: 'Bell', userName: 'annab', selected: false },
        { firstName: 'James', lastName: 'Bond', userName: 'jbond', selected: false },
        { firstName: 'Peter', lastName: 'Parker', userName: 'spiderman', selected: false },
        { firstName: 'Clark', lastName: 'Kent', userName: 'superman', selected: false },
        { firstName: 'Diana', lastName: 'Prince', userName: 'wonderwoman', selected: false },
        { firstName: 'Bruce', lastName: 'Wayne', userName: 'batman', selected: false },
        { firstName: 'Barry', lastName: 'Allen', userName: 'flash', selected: false },
      ];  // this return is forced to return something to avoid the error if the backend is not implemented
  }
};
