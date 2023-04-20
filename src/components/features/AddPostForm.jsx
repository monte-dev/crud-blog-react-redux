import { Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const AddPostForm = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publishedDate, setPublishedDate] = useState('');
	const [shortDescription, setShortDescription] = useState('');
	const [content, setContent] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddPost = (e) => {
		e.preventDefault();
		dispatch(
			addPost({ title, author, publishedDate, shortDescription, content })
		);
		setTitle('');
		setAuthor('');
		setPublishedDate('');
		setShortDescription('');
		setContent('');
	};

	return (
		<Col className="d-flex justify-content-left mb-3" md={10} lg={6}>
			<Form
				className="d-flex flex-column mb-3 w-100"
				onSubmit={(e) => {
					handleAddPost(e);
					navigate('/');
				}}
			>
				<Form.Group
					className="mb-3 col-12 col-sm-6"
					controlId="postTitle"
				>
					<Form.Label>Title</Form.Label>
					<Form.Control
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						placeholder="Enter title"
						required
					/>
				</Form.Group>
				<Form.Group
					className="mb-3 col-12 col-sm-6"
					controlId="postAuthor"
				>
					<Form.Label>Author</Form.Label>
					<Form.Control
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
						type="text"
						placeholder="Enter author"
						required
					/>
				</Form.Group>
				<Form.Group
					className="mb-3 col-12 col-sm-6"
					controlId="postPublished"
				>
					<Form.Label>Published</Form.Label>
					<Form.Control
						value={publishedDate}
						onChange={(e) => setPublishedDate(e.target.value)}
						type="date"
						placeholder="Enter date"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="postDescription">
					<Form.Label>Short Description</Form.Label>
					<Form.Control
						value={shortDescription}
						onChange={(e) => setShortDescription(e.target.value)}
						as="textarea"
						placeholder="Leave a comment here"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="postContent">
					<Form.Label>Main Content</Form.Label>
					<Form.Control
						value={content}
						onChange={(e) => setContent(e.target.value)}
						as="textarea"
						placeholder="Leave a comment here"
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Add Post
				</Button>
			</Form>
		</Col>
	);
};
export default AddPostForm;
