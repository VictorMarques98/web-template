import { createContext } from "react";
import { useLocalStorage } from "app/_hooks/useLocalStorage";
import { UserDataInterface } from "app/_types";

interface AuthProviderInterface {
  children: React.ReactNode;
}

const defaultValues = {}

export const AuthContext = createContext(defaultValues);

export function AuthProvider({ children }: AuthProviderInterface) {
  const { storedValue: userData } = useLocalStorage<UserDataInterface>("@user_data");

  const values = {
    userData,
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}