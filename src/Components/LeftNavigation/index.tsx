import * as React from 'react';
import Logo from '../Logo';
import NaviItem from './NaviItem';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const NaviagationStyled = styled('div')`
	.flex-column {
		// position: sticky;
		// top: 0;
		// z-index: 1000;
		// height: calc(100vh);
		// background-color: #20232a;
		.nav-link {
			position: relative;
			padding: 1.2rem 1rem 1.2rem 1.2rem;
			color: #ddd;
			&.active {
				color: #eee;
				font-weight: bold;
				background: #5a6268;
				&:after {
					content: '';
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 5px;
					height: 100%;
					background: #eb5352;
				}
			}
		}
`;

const LeftNaviagation = () => {
  return (
    <NaviagationStyled>
      <Nav defaultActiveKey="/" className="flex-column">
        <Logo />
        <NaviItem to="/" text="대시보드" />
        <NaviItem to="/test" text="분석" />
        <NaviItem to="/login" text="로그인" />
      </Nav>
    </NaviagationStyled>
  );
};

export default LeftNaviagation;
