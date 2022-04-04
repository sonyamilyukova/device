import styled from 'styled-components';

interface IRangeScale {
  width?: number;
}

interface IRangeBar {
  left: number;
  right: number;
}

export const RangeScale = styled.div<IRangeScale>`
  position: relative;
  width: ${(props) => props.width ? `${props.width}px` : '100%'};
  height: 2px;
  background-color: ${(props) => props.theme.colors.basicGrey};
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const RangeBar = styled.div<IRangeBar>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => `${props.left / 100}%`};
  right: ${(props) => `${100 - props.right / 100}%`};
  background-color: ${(props) => props.theme.colors.basicBlack};
`;

export const LeftBlock = styled.div`
  position: absolute;
  top: -50%;
  bottom: -50%;
  left: 0;
  margin: auto;
  display: inline-grid;
  justify-items: center;
  align-items: end;
`;

export const RightBlock = styled(LeftBlock)`
  left: unset;
  right: 0;
`;

export const LeftToggle = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 18px;
  height: 18px;
  border: 2px solid ${(props) => props.theme.colors.basicBlack};
  border-radius: 50%;
  transform: translate(50%);
  cursor: pointer;
`;

export const RightToggle = styled(LeftToggle)`
  left: unset;
  right: 0;
  transform: none;
`;

export const LeftLabel = styled.label`
  max-width: 60px;
  display: flex;
  opacity: 0.3;
  font-size: 15px;
  position: absolute;
  top: 10px;
  transform: translate(35%);
`;

export const RightLabel = styled(LeftLabel)`
  transform: none;
`;

export const Input = styled.input`
  margin-left: 6px;
  background: none;
  border: none;
  padding: 0;
  max-width: 50px;
  font-size: 15px;
  outline: none;
`;
