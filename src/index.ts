import 'dotenv/config';
import express from 'express';
(() => {
	const app = express();

	app.get('/', (_req, res) => {
		res.send('Hello World!');
	});

	app.listen(process.env.PORT, () => {
		console.log(
			`Server is running on http://localhost:${process.env.PORT}`
		);
	});
})();
