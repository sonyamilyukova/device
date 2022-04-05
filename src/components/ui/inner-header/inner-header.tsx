import React from "react";
import { StyledInnerHeader } from "./styles";

const InnerHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledInnerHeader>
      {children}
    </StyledInnerHeader>
  )
}

export default InnerHeader;
