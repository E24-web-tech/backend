import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../mysql';

export class Post extends Model {
	id: number;
	title: string;
	content: string;
	voteStatus: number | null; // 1 or -1 or null
	authorId: number;
}

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		voteStatus: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		authorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{ sequelize, tableName: 'Posts', timestamps: true }
);
