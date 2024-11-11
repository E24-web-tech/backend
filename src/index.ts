import 'dotenv/config';
import express from 'express';
import { sequelize } from './database/mysql';
(() => {
	const app = express();

	app.get('/', (_req, res) => {
		res.send('Hello World!');
	});

	sequelize
		.authenticate()
		.then(() => console.log('Database connected'))
		.catch((err) => console.log(err));
	app.listen(process.env.PORT, () => {
		console.log(
			`Server is running on http://localhost:${process.env.PORT}`
		);
	});
})();
