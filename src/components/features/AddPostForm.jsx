import { Col } from 'react-bootstrap';
import { addPost } from '../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PostForm from './PostForm';

const AddPostForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddPost = (post) => {
		dispatch(addPost(post));
		navigate('/');
	};

	return (
		<Col className="d-flex justify-content-left mb-3" md={10} lg={6}>
			<PostForm action={handleAddPost} actionText="Add Post"></PostForm>
		</Col>
	);
};
export default AddPostForm;
