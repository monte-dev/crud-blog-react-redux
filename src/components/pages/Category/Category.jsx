import { Container, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AllPosts from '../../features/AllPosts';
const Category = () => {
	const { categoryId } = useParams();
	console.log(categoryId);
	return (
		<Container>
			<Row className="flex-column align-items-start">
				<Col
					className="d-flex justify-content-between align-items-center mb-3"
					md={10}
					lg={6}
				>
					<h1>Category: {categoryId}</h1>
				</Col>
			</Row>
			<Row>
				<AllPosts categoryId={categoryId}></AllPosts>
			</Row>
		</Container>
	);
};
export default Category;
