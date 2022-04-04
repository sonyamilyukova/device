import React, { useState } from 'react';
import {
  RangeScale,
  RangeBar,
  LeftBlock,
  RightBlock,
  LeftToggle,
  RightToggle,
  LeftLabel,
  RightLabel,
  Input
} from './styles';

export interface IRangeProps {
  width?: number;
  name: string;
  min: number;
  max: number;
  onMinChange: (value: number) => any;
  onMaxChange: (value: number) => any;
}

const Range: React.FC<IRangeProps> =
  ({ width,
     name,
     min,
     max,
     onMinChange,
     onMaxChange }) => {

  const [leftEdge, setLeftEdge] = useState(min);
  const [rightEdge, setRightEdge] = useState(max);

  const handleLeftEdgeChange = (edge: number) => {
    if (edge < 0) setLeftEdge(0);
    else if (edge > 6500) setLeftEdge(6500);
    else if (edge > rightEdge) setLeftEdge(rightEdge - 3500);
    else setLeftEdge(edge);
  };

  const handleRightEdgeChange = (edge: number) => {
    if (edge < 3500) setRightEdge(3500);
    else if (edge > 10000) setRightEdge(10000);
    else if (edge < leftEdge) setRightEdge(leftEdge + 3500);
    else setRightEdge(edge);
  };

  const [minValue, setMinValue] = useState(min === 0 ? '' : min);
  const [maxValue, setMaxValue] = useState(max === 3500 ? '' : max);

  const handleValueChange = (value: string, setValue: (arg: any) => any) => {
    setValue(Number(value) <= 0 ? '' : value);
    onMinChange(minValue ===  '' ? min : Number(minValue));
    onMaxChange(maxValue === '' ? max : Number(maxValue));
  };

  return (
    <RangeScale width={width}>
      <RangeBar left={leftEdge} right={rightEdge}>
        <LeftBlock>
          <LeftToggle type='button'/>
          <LeftLabel>
            от
            <Input
              type='number'
              min='0'
              placeholder={leftEdge.toString()}
              name={`min-${name}`}
              value={minValue}
              onChange={evt => {
                handleLeftEdgeChange(Number(evt.target.value));
                handleValueChange(evt.target.value, setMinValue);
              }}
            />
          </LeftLabel>
        </LeftBlock>

        <RightBlock>
          <RightToggle type='button' />
          <RightLabel>
            до
            <Input
              type='number'
              min='0'
              placeholder={rightEdge.toString()}
              name={`max-${name}`}
              value={maxValue}
              onChange={evt => {
                handleRightEdgeChange(Number(evt.target.value));
                handleValueChange(evt.target.value, setMaxValue);
              }}
            />
          </RightLabel>
        </RightBlock>
      </RangeBar>
    </RangeScale>
  )
};

export default Range;
