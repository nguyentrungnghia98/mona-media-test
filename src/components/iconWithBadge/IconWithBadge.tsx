import React from 'react';
import { Badge } from 'reactstrap';
import { IconWithBadgeProps } from './IconWithBadge.d';
import './IconWithBadge.scss';

const IconWithBadge: React.FC<IconWithBadgeProps> = ({ badgeNumber, children, className }) => {
  return (
    <div className={`icon-with-badge ${className || ''}`}>
      {children}
      <Badge pill={true} className="icon-with-badge__badge">
        <div>{badgeNumber}</div>
      </Badge>
    </div>
  );
};

export default IconWithBadge;
