import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface UserContextType {
  name: string;
  email: string;
  darkMode: boolean;
  updateProfile: (name: string, email: string) => void;
  toggleDarkMode: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const updateProfile = (name: string, email: string) => {
    setName(name);
    setEmail(email);
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <UserContext.Provider
      value={{ name, email, darkMode, updateProfile, toggleDarkMode }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
