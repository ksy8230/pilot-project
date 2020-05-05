import * as React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import toggle, { Props } from '../../../hocs/toggle';

const NaviItem: React.FunctionComponent<Props> = ({ to, text, action }) => {
  return (
    <>
      <Nav.Link href={to}>{text}</Nav.Link>
    </>
  );
};

export default toggle(NaviItem);
