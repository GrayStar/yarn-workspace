import React, { FC } from 'react';
import { multiply } from 'shared';

export const Dashboard: FC = () => {
	return (
		<div>
			<h1>Dashboard Page</h1>
			<p>{multiply(2, 3)}</p>
		</div>
	);
};
