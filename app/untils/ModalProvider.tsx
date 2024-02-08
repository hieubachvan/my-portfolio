"use client";
import React from "react";
export type ModalContextType = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ModalContext = React.createContext<ModalContextType>({
  openModal: false,
  setOpenModal: () => {},
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
