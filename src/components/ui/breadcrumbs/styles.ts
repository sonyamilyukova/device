import styled from "styled-components";
import { IBreadcrumbsProps } from "./breadcrumbs";

export const StyledBreadcrumbs = styled.ul<IBreadcrumbsProps>`
  display: flex;
  padding: 10px 0;
  list-style: none;
  opacity: 0.6;
  gap: 35px;
  margin-top: ${(props) => props.marginTop ? `${props.marginTop}px` : '0'};
  margin-bottom: ${(props) => props.marginBottom ? `${props.marginBottom}px` : '0'};
`;

export const ListItem = styled.li`
  position: relative;
  
  &:after {
    content: "";
    width: 4px;
    height: 7px;
    background-image: url(${"/images/arrows/breadcrumbs.svg"});
    position: absolute;
    right: -20px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  
  &:last-child:after {
    display: none;
  }
`;
