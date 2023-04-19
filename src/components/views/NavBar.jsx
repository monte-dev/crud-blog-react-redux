import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container, ContainerFluid } from 'react-bootstrap';

const NavBar = () => {
	return (
		<Container>
			<Navbar
				bg="primary"
				variant="dark"
				className="rounded px-3 my-3"
				expand="md"
			>
				<Navbar.Brand>Blog.app</Navbar.Brand>
				<Navbar.Toggle aria-controls="mobile-nav" />
				<Navbar.Collapse
					id="mobile-nav"
					className="justify-content-end"
				>
					<Nav>
						<Nav.Link as={NavLink} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/about">
							About
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
export default NavBar;
