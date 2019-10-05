import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

const RoyTooltip = ({ id, title, children, placement = "bottom" }) => {
  return (
    <span>
      {children}
      <UncontrolledTooltip
        className="roy-tooltip"
        arrowClassName="roy-tooltip-arrow"
        innerClassName="roy-tooltip-inner"
        placement={placement}
        target={id}
      >
        {title}
      </UncontrolledTooltip >
    </span>
  );
}

export default RoyTooltip