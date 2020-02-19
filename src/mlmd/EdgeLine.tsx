import * as React from 'react';
// @ts-ignore
import LineChart from 'react-svg-line-chart';

// How many pixels away from the point the curve should start at.
const HORIZONTAL_CONTROL_POINT_OFFSET = 30;

interface EdgeLineProps {
  height: number;
  width: number;
  y1: number;
  y4: number;
}

export const EdgeLine: React.FC<EdgeLineProps> = (props) => {
  const {height, width, y1, y4} = props;

  return <LineChart
    data={[
      {x: 0, y: y1},
      {x: HORIZONTAL_CONTROL_POINT_OFFSET, y: y1},
      {x: width - HORIZONTAL_CONTROL_POINT_OFFSET, y: y4},
      {x: width, y: y4},
    ]}
    areaVisible={false}
    axisVisible={false}
    gridVisible={false}
    labelsVisible={false}
    pathColor={'#BDC1C6'}
    pathVisible={true}
    pathWidth={1}
    pathOpacity={1}
    pointsVisible={false}
    viewBoxHeight={height}
    viewBoxWidth={width}
    pathSmoothing={0}
  />;
};