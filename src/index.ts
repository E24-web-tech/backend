import 'dotenv/config';
import express from 'express';
import { sequelize } from './database/mysql';
import { ModelSync } from './database/ModelSync';
(() => {
	const app = express();

	app.get('/', (_req, res) => {
		res.send('Hello World!');
	});

	sequelize
		.authenticate()
		.then(() => console.log('Database connected'))
		.catch((err) => console.log(err));

	ModelSync()
		.then(() => console.log('Models synced'))
		.catch((err) => console.log(err));
	app.listen(process.env.PORT, () => {
		console.log(
			`Server is running on http://localhost:${process.env.PORT}`
		);
	});
})();
