import create from 'zustand';

interface User {
  firstName: string;
  lastName: string;
  userName: string;
}

interface Role {
  roleName: string;
}

interface StoreState {
  users: User[];
  roles: Role[];
  setUsers: (users: User[]) => void;
  setRoles: (roles: Role[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  users: [],
  roles: [],
  setUsers: (users) => set(() => ({ users })),
  setRoles: (roles) => set(() => ({ roles })),
}));
