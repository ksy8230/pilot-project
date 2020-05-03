import * as React from 'react';
import { Route } from 'react-router-dom';
import Naviagation from '../Components/Navigation';
import { Row, Col } from 'react-bootstrap';

type DefaultLayoutProps = {
	path: string;
	component: any;
};

const DefaultLayout = ({ component: Component, ...rest }: DefaultLayoutProps) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<>
					<Row>
						<Col sm={4}>
							<Naviagation />
						</Col>
						<Col sm={8}>
							<Component {...matchProps} {...rest} />
						</Col>
					</Row>
				</>
			)}
		/>
	);
};

export default DefaultLayout;
