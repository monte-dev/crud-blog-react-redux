import EditPostForm from '../../../features/EditPostForm';
import { Row, Col } from 'react-bootstrap';

const EditPost = ({ action, actionText, ...props }) => {
	return (
		<Row className="justify-content-center flex-column align-items-center">
			<Col
				className="d-flex justify-content-left align-items-center mb-3"
				md={10}
				lg={6}
			>
				<h1>Edit Post</h1>
			</Col>
			<EditPostForm />
		</Row>
	);
};
export default EditPost;
