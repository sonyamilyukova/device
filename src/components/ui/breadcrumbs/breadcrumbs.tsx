import React from "react";
import { StyledBreadcrumbs, ListItem } from "./styles";

export interface IBreadcrumbsProps {
  items?: string[];
  marginTop?: number;
  marginBottom?: number;
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ items, marginTop, marginBottom }) => {
  return items?.length ? (
    <StyledBreadcrumbs marginTop={marginTop} marginBottom={marginBottom}>
      {items.map((item, index) => (
        <ListItem key={index}>
          {item}
        </ListItem>
      ))}
    </StyledBreadcrumbs>
  ) : null
}

export default Breadcrumbs;
