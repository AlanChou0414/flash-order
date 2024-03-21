import { createContext, ReactNode, useContext, useState } from "react";

export const StoreProvider = ({ children }: {
  children: ReactNode;
}) => {
  const [shoppingCart, setShoppingCart] = useState<[]>();
  const [mode, setMode] = useState<{ stayInd: boolean; guest: number; }>();

  return (
    <StoreContext.Provider value={{
      shoppingCart,
      mode,
      setShoppingCart,
      setMode
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const StoreContext = createContext<STORE_CONTEXT>({});

export const useStore = () => useContext(StoreContext);