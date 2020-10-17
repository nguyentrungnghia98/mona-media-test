import IconWithBadge from 'components/iconWithBadge/IconWithBadge';
import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import IconBell from 'components/icons/IconBell';

const HeaderNotification: React.FC = () => (
  <UncontrolledDropdown nav inNavbar className="d-none d-md-flex">
    <DropdownToggle nav>
      <IconWithBadge badgeNumber={10}>
        <IconBell />
      </IconWithBadge>
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>Unknown</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default HeaderNotification;
