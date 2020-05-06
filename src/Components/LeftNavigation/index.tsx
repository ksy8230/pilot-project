import * as React from 'react';
import Logo from '../Logo';
import NaviItem from './NaviItem';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from '../../data/rootReducer';


const NaviagationStyled = styled('div')`
	.flex-column {
		position: sticky;
		top: 0;
		z-index: 1000;
		height: calc(100vh);
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

interface Props {
  user: boolean;
}

const LeftNaviagation: React.FunctionComponent<Props> = ({ user }) => {
  const {location} = useSelector((state: any)=> state.router);
  return (
    <NaviagationStyled>
      <Nav defaultActiveKey={location.pathname} className="flex-column">
        <Logo />
        <NaviItem to="/" text="대시보드" show={user} />
        <NaviItem to="/threatinside" text="T.I" show={user} />
        <NaviItem to="/login" text="로그인" show={!user} />
      </Nav>
    </NaviagationStyled>
  );
};

export default LeftNaviagation;
