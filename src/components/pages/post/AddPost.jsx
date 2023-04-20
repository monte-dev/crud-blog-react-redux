import { Row, Col } from 'react-bootstrap';
import AddPostForm from '../../features/AddPostForm';
const AddPost = () => {
	return (
		<Row className="justify-content-center flex-column align-items-center">
			<Col
				className="d-flex justify-content-left align-items-center mb-3"
				md={10}
				lg={6}
			>
				<h1>Add post</h1>
			</Col>
			<AddPostForm />
		</Row>
	);
};
export default AddPost;
