import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import PostCard from './PostCard';
import { Col, Row, Container } from 'react-bootstrap';
const AllPosts = () => {
	const posts = useSelector((posts) => getAllPosts(posts));
	return (
		<Row>
			{posts.map((post) => (
				<Col
					key={post.id}
					md={6}
					lg={4}
					xl={3}
					className="d-flex flex-column justify-content-end align-items-stretch"
				>
					<PostCard {...post} />
				</Col>
			))}
		</Row>
	);
};
export default AllPosts;
