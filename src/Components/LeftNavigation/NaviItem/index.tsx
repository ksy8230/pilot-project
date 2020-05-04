import * as React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

type NaviItemProps = {
  to: string;
  text: string;
  action?: any;
};

const NaviItem = ({ to, text, action }: NaviItemProps) => {
  return (
    <>
      <Nav.Link href={to}>{text}</Nav.Link>
    </>
  );
};

export default NaviItem;
