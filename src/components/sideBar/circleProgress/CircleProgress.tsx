import React from 'react';
import './CircleProgress.scss';
import { CircleProgressProps } from './CircleProgress.d';

const CircleProgress: React.FC<CircleProgressProps> = ({ progress, total }) => {
  const stroke = (2.45 * 100) / total;
  const strokeDasharray = `${progress * stroke} 999`;
  return (
    <div className="circle-progress">
      <svg className="circle-progress__wrapper" width="80px" height="80px" xmlns="http://www.w3.org/2000/svg">
        <circle className="circle-progress__back" cx="40" cy="40" r="39" />
        <circle className="circle-progress__prog" style={{ strokeDasharray }} cx="40" cy="40" r="39" />
      </svg>
    </div>
  );
};

export default CircleProgress;
