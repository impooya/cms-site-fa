import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ModalsContext = createContext();

export function ModalProvider({ children }) {
  const [whichPage, setWichPage] = useState("root");
  console.log(whichPage);

  return (
    <ModalsContext.Provider value={[setWichPage, whichPage]}>
      {children}
    </ModalsContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node, // Validate that children is a required node
};
