import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { dateToString } from '../../utils/dateToString';

const PostCard = ({
	id,
	title,
	author,
	publishedDate,
	category,
	shortDescription,
}) => {
	return (
		<Card className="mx-1 my-2">
			<Card.Body className="">
				<Card.Title className="fw-bold">{title}</Card.Title>
				<Card.Text className="fs-6">
					<span className="fw-bold">Author: </span>
					{author}
				</Card.Text>
				<Card.Text>
					<span className="fw-bold">Published: </span>
					{dateToString(publishedDate)}
				</Card.Text>
				<Card.Text>
					<span className="fw-bold">Category: </span>
					{category}
				</Card.Text>
				<Card.Text>{shortDescription}</Card.Text>
				<Button as={NavLink} to={`post/${id}`} variant="primary">
					Read more
				</Button>
			</Card.Body>
		</Card>
	);
};
export default PostCard;
