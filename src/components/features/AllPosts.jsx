import { useSelector } from 'react-redux';
import { getAllPosts, getCategorizedPosts } from '../../redux/postsRedux';
import PostCard from './PostCard';
import { Col, Row } from 'react-bootstrap';

const AllPosts = (props) => {
	console.log(props);
	const posts = useSelector((posts) => getAllPosts(posts));
	const categorizedPosts = useSelector((state) =>
		getCategorizedPosts(state, props.categoryId)
	);
	console.log(categorizedPosts);
	if (props.categoryId) {
		return (
			<Row>
				{categorizedPosts.map((post) => (
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
	}
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
