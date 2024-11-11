import { User } from './models/User';
import { Post } from './models/Post';
import './models/associations';
export const ModelSync = async () => {
	await User.sync({ force: true });
	await Post.sync({ force: true });
};
