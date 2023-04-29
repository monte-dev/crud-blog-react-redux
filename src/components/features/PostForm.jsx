import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { getAllCategories } from '../../redux/categoriesRedux';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
	const categories = useSelector((categories) =>
		getAllCategories(categories)
	);

	const [title, setTitle] = useState(props.title || '');
	const [author, setAuthor] = useState(props.author || '');
	const [publishedDate, setPublishedDate] = useState(
		props.publishedDate || ''
	);
	const [category, setCategory] = useState(props.category || '');
	const [shortDescription, setShortDescription] = useState(
		props.shortDescription || ''
	);
	const [content, setContent] = useState(props.content || '');
	const [contentError, setContentError] = useState(false);
	const [dateError, setDateError] = useState(false);

	const handleSubmit = () => {
		// validate date and content inputs as they are external components
		setContentError(!content);
		setDateError(!publishedDate);
		if (content && publishedDate) {
			action({
				title,
				author,
				publishedDate,
				category,
				shortDescription,
				content,
			});
		}
	};

	const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm();

	return (
		<Form
			className="d-flex flex-column mb-3 w-100"
			onSubmit={validate(handleSubmit)}
		>
			<Form.Group className="mb-3 col-12 col-sm-6" controlId="postTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					{...register('title', { required: true, minLength: 4 })}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					placeholder="Enter title"
				/>
				{errors.title && (
					<small className="d-block form-text text-danger mt-2">
						This field is required
					</small>
				)}
			</Form.Group>
			<Form.Group className="mb-3 col-12 col-sm-6" controlId="postAuthor">
				<Form.Label>Author</Form.Label>
				<Form.Control
					{...register('author', { required: true, minLength: 4 })}
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					type="text"
					placeholder="Enter author"
				/>
				{errors.author && (
					<small className="d-block form-text text-danger mt-2">
						This field is required
					</small>
				)}
			</Form.Group>
			<Form.Group
				className="mb-3 col-12 col-sm-6"
				controlId="postPublished"
			>
				<Form.Label>Published</Form.Label>
				<ReactDatePicker
					selected={publishedDate}
					onChange={(date) => setPublishedDate(date)}
				/>
				{dateError && (
					<small className="d-block form-text text-danger mt-2">
						Date cannot be empty
					</small>
				)}
			</Form.Group>
			<Form.Group>
				<Form.Label>Category</Form.Label>
				<Form.Select
					aria-label="Category"
					onChange={(e) => setCategory(e.target.value)}
				>
					{categories.map((category) => {
						return (
							<option key={category.id} value={category.name}>
								{category.name}
							</option>
						);
					})}
				</Form.Select>
			</Form.Group>
			<Form.Group className="mb-3" controlId="postDescription">
				<Form.Label>Short Description</Form.Label>
				<Form.Control
					{...register('desc', { required: true, minLength: 20 })}
					value={shortDescription}
					onChange={(e) => setShortDescription(e.target.value)}
					as="textarea"
					placeholder="Leave a comment here"
				/>
				{errors.desc && (
					<small className="d-block form-text text-danger mt-2">
						This field needs to be at least 20 characters long
					</small>
				)}
			</Form.Group>
			<Form.Group className="mb-3" controlId="postContent">
				<Form.Label>Main Content</Form.Label>
				<Form.Control
					as={ReactQuill}
					theme="snow"
					value={content}
					onChange={setContent}
					placeholder="Leave a comment here"
				/>
				{contentError && (
					<small className="d-block form-text text-danger mt-2">
						Content can't be empty
					</small>
				)}
			</Form.Group>
			<Button variant="primary" type="submit">
				{actionText}
			</Button>
		</Form>
	);
};

PostForm.propTypes = {
	action: PropTypes.func.isRequired,
	actionText: PropTypes.string.isRequired,
	title: PropTypes.string,
	author: PropTypes.string,
	publishedDate: PropTypes.string,
	shortDescription: PropTypes.string,
	content: PropTypes.string,
};

export default PostForm;
