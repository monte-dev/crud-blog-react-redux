import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { editPost, getPostById } from '../../redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = ({ action, actionText }) => {
	const { postId } = useParams();
	console.log(postId);
	const post = useSelector((currentPost) => getPostById(currentPost, postId));

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleEditPost = (post) => {
		dispatch(editPost({ ...post, id: postId }));
		navigate('/');
	};
	return (
		<Col className="d-flex justify-content-left mb-3" md={10} lg={6}>
			<PostForm
				action={handleEditPost}
				actionText={'Edit Post'}
			></PostForm>
		</Col>
	);
};
export default EditPostForm;
