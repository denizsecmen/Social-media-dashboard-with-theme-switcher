import React, { useState, createContext } from 'react';

interface MyContextType {
  modes: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}
const defaultContextValue: MyContextType = {
  modes: 'dark',
  setMode: () => {}, // Placeholder function
};

const MyContext = createContext<MyContextType>(defaultContextValue);

const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [modes, setMode] = useState<string>('default value');

  return (
    <MyContext.Provider value={{ modes, setMode }}>
      {children}
    </MyContext.Provider>
  );
};
export { MyContext };
export default MyProvider;
