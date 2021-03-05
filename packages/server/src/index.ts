import { multiply } from 'shared';
import express from 'express';
import bodyParser from 'body-parser';

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (_req, res) => {
	const result = multiply(2, 3);

	res.send(`OK * ${result}`);
});

app.listen(port, () => {
	console.log(`> App Ready on http://localhost:${port}.`);
});
