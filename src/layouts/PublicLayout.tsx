import * as React from 'react';
import { Route } from 'react-router-dom';

type PublicLayoutProps = {
	path: string;
	component: any;
};

const PublicLayout = ({ component: Component, ...rest }: PublicLayoutProps) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<>
					<Component {...matchProps} {...rest} />
				</>
			)}
		/>
	);
};

export default PublicLayout;
