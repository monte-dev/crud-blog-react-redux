import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../../redux/postsRedux';

const EditPost = () => {
	const { postId } = useParams();
	const { title, content, author, publishedDate, id } = useSelector(
		(currentPost) => getPostById(currentPost, postId)
	);
	return <div>{title}</div>;
};
export default EditPost;
