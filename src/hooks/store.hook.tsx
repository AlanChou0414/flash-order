import { ReactNode, createContext, useState } from "react";

export const StoreContext = createContext<{
  useShoppingCart: [never[], React.Dispatch<React.SetStateAction<never[]>>]
} | null>(null);
export const StoreProvider = ({ children }: {
  children: ReactNode
}) => {

  const store = {
    useShoppingCart: useState([] as never[]),
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};