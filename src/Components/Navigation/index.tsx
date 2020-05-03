import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const Naviagation = () => {
	return (
		<>
			<nav className="navbar fixed-left bg-blue">
				<ul>
					<li>
						<Logo />
					</li>
					<li>
						<Link to="/">대시보드</Link>
					</li>
					<li>
						<Link to="/">분석</Link>
					</li>
					<li>
						<Link to="/login">login</Link>
					</li>
				</ul>
			</nav>
			<style jsx>
				{`
					.fixed-top {
						height: 50px;
					}
				`}
			</style>
		</>
	);
};

export default Naviagation;
