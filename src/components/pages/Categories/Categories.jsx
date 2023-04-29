import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { ListGroup } from 'react-bootstrap';

const Categories = () => {
	const categories = useSelector((category) => getAllCategories(category));
	return (
		<>
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1>All categories</h1>
			</div>
			<ListGroup>
				{categories.map((category) => {
					return (
						<ListGroup.Item key={category.id}>
							<Link to={`/category/${category.name}`}>
								{category.name}
							</Link>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		</>
	);
};
export default Categories;
