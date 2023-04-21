import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
	const [title, setTitle] = useState(props.title || '');
	const [author, setAuthor] = useState(props.author || '');
	const [publishedDate, setPublishedDate] = useState(
		props.publishedDate || ''
	);
	const [shortDescription, setShortDescription] = useState(
		props.shortDescription || ''
	);
	const [content, setContent] = useState(props.content || '');

	const handleSubmit = (e) => {
		e.preventDefault();
		action({ title, author, publishedDate, shortDescription, content });
	};

	return (
		<Form
			className="d-flex flex-column mb-3 w-100"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<Form.Group className="mb-3 col-12 col-sm-6" controlId="postTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					placeholder="Enter title"
					required
				/>
			</Form.Group>
			<Form.Group className="mb-3 col-12 col-sm-6" controlId="postAuthor">
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
				{actionText}
			</Button>
		</Form>
	);
};
export default PostForm;
