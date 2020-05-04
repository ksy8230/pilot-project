import * as React from 'react';
import { Row, Col, Container, Dropdown } from 'react-bootstrap';
import Profile from '../Profile';
import styled from 'styled-components';
import { UserProps } from '../../types';

type TopNavigationProps = {
  user: UserProps;
};

const TopNavigationStyled = styled('div')`
  margin: 1rem 0;
  padding: 0 15px;
  display: flex;
  .gnb {
    margin-left: auto;
  }
`;

const TopNavigation = ({ user }: TopNavigationProps) => {
  return (
    <TopNavigationStyled>
      <div className="dropMenu">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            대시보드
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">대시보드</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="gnb">
        <Profile user={user} />
      </div>
    </TopNavigationStyled>
  );
};

export default TopNavigation;
