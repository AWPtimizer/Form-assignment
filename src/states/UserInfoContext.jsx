import { createContext, useState } from "react";

export const UserInfo = createContext(null);

export function UserInfoProvider({ children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const value = {
    username,
    email,
    password,
    setUsername,
    setEmail,
    setPassword,
  };
  return <UserInfo.Provider value={value}>{children}</UserInfo.Provider>;
}
