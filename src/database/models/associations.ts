import { User } from './User';
import { Post } from './Post';

User.hasMany(Post, {
	foreignKey: 'authorId',
	onDelete: 'CASCADE',
	onUpdate: 'CASCADE',
});

Post.belongsTo(User, {
	foreignKey: 'authorId',
	onDelete: 'CASCADE',
	onUpdate: 'CASCADE',
});
