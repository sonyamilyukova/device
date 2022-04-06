import styled from "styled-components";

export const Label = styled.label`
  text-transform: lowercase;
  color: ${(props) => props.theme.colors.basicBlack};
  opacity: 0.3;
`;

export const RangeBar = styled.input`
  width: 100%;
  height: 2px;
  margin: 0;
  -webkit-appearance: none;
  background-color: transparent;
  overflow: hidden;
  padding: 14px 0;

  &::-webkit-slider-runnable-track {
    height: 2px;
    -webkit-appearance: none;
    background-color: ${(props) => props.theme.colors.basicBlack};
  }
  &::-moz-range-track {
    height: 2px;
    background-color: ${(props) => props.theme.colors.basicBlack};
  }
  &::-ms-track {
    height: 2px;
    background-color: ${(props) => props.theme.colors.basicBlack};
  }

  &::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.basicBlack};
    background-color: ${(props) => props.theme.colors.basicLightGrey};
    -webkit-appearance: none;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.basicBlack};
    background-color: ${(props) => props.theme.colors.basicLightGrey};
    cursor: pointer;
  }
  &::-ms-thumb {
    height: 18px; 
    width: 18px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.basicBlack};
    background-color: ${(props) => props.theme.colors.basicLightGrey};
    cursor: pointer;
  }
  
  &:active::-webkit-slider-thumb {
    background-color: ${(props) => props.theme.colors.basicBlack};
  }
  &:active::-moz-range-thumb {
    background-color: ${(props) => props.theme.colors.basicBlack};
  }
  &:active::-ms-thumb {
    background-color: ${(props) => props.theme.colors.basicBlack};
  }

  &::-moz-range-progress {
    background-color: ${(props) => props.theme.colors.basicBlack};
  }
  &::-moz-range-track {
    background-color: ${(props) => props.theme.colors.basicGrey};
  }
  &::-ms-fill-lower {
    background-color: ${(props) => props.theme.colors.basicBlack};
  }
  &::-ms-fill-upper {
    background-color: ${(props) => props.theme.colors.basicGrey};
  }
`