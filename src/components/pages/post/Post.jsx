import { useState } from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { Col, Row, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { dateToString } from '../../../utils/dateToString';

const Post = () => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { postId } = useParams();
	const post = useSelector((currentPost) => getPostById(currentPost, postId));
	// if post is undefined === doesn't exist
	if (!post) {
		return <Navigate to="/" />;
	}
	//  destructure after confirming post exists
	const { title, content, author, publishedDate, id } = post;

	const handleRemovePost = () => {
		console.log('removed');
		dispatch(removePost(id));
	};

	return (
		<>
			<Row className="justify-content-center flex-column align-items-center">
				<Col
					className="d-flex justify-content-between align-items-center mb-3"
					md={10}
					lg={6}
				>
					<h1>{title}</h1>
					<div>
						<Button
							as={NavLink}
							variant="outline-info"
							className="mx-1"
							to={`/post/edit/${id}`}
						>
							Edit
						</Button>
						<Button variant="outline-danger" onClick={handleShow}>
							Delete
						</Button>
					</div>
				</Col>
				<Col md={10} lg={6}>
					<p className="my-2">
						<span className="fw-bold">Author: </span>
						{author}
					</p>
					<p className="my-2">
						<span className="fw-bold">Published: </span>
						{dateToString(publishedDate)}
					</p>
					<p
						dangerouslySetInnerHTML={{ __html: content }}
						className="mt-4 mb-5"
					></p>
				</Col>
			</Row>
			<Modal show={show} onHide={handleClose} backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					This operation will completely remove this post from the
					app.
					<br></br>
					Are you sure you want to do that?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant="danger"
						onClick={() => {
							handleRemovePost();
							handleClose();
						}}
					>
						Remove
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default Post;
