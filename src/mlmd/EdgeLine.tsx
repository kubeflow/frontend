import * as React from 'react';
// @ts-ignore
import LineChart from 'react-svg-line-chart';

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
      {x: 30, y: y1},
      {x: width - 30, y: y4},
      {x: width     , y: y4},
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