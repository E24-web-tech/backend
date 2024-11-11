import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../mysql';
export class User extends Model {
	id: number;
	username: string;
	email: string;
	password: string;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},

		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ sequelize, tableName: 'Users', timestamps: true }
);
