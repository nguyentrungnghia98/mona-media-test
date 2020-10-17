import IconMail from 'components/icons/IconMail';
import IconWithBadge from 'components/iconWithBadge/IconWithBadge';
import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

const HeaderMessages: React.FC = () => (
  <UncontrolledDropdown nav inNavbar className="d-none d-md-flex">
    <DropdownToggle nav>
      <IconWithBadge badgeNumber={5}>
        <IconMail />
      </IconWithBadge>
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>Unknown</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default HeaderMessages;
