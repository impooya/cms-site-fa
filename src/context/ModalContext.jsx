import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ModalsContext = createContext();

export function ModalProvider({ children }) {
  const [whichPage, setWhichPage] = useState("root");

  return (
    <ModalsContext.Provider value={[whichPage, setWhichPage]}>
      {children}
    </ModalsContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node, // Validate that children is a required node
};
