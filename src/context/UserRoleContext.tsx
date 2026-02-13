import { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "elderly" | "caretaker" | null;

interface UserRoleContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  logout: () => void;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export const UserRoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>(null);

  const logout = () => setRole(null);

  return (
    <UserRoleContext.Provider value={{ role, setRole, logout }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = () => {
  const context = useContext(UserRoleContext);
  if (!context) throw new Error("useUserRole must be used within UserRoleProvider");
  return context;
};
