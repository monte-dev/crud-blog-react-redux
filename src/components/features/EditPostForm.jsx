import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { editPost } from '../../redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = ({ action, actionText }) => {
	const { postId } = useParams();

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
