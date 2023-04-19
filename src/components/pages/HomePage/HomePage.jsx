import Button from 'react-bootstrap/Button';
import AllPosts from '../../features/AllPosts';

const HomePage = () => {
	return (
		<main>
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1>All Posts</h1>
				<Button variant="outline-info">Add Post</Button>
			</div>
			<AllPosts />
		</main>
	);
};

export default HomePage;
