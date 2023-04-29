import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About';
import HomePage from './components/pages/HomePage/HomePage';
import AddPost from './components/pages/post/AddPost';
import EditPost from './components/pages/post/edit/EditPost';
import Post from './components/pages/post/Post';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import NotFound from './components/pages/NotFound.jsx';
import { Container } from 'react-bootstrap';
import Categories from './components/pages/Categories/Categories';
import Category from './components/pages/Category/Category';

function App() {
	return (
		<main>
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<About />} />
					<Route path="/post/:postId" element={<Post />} />
					<Route path="/post/add" element={<AddPost />} />
					<Route path="/post/edit/:postId" element={<EditPost />} />
					<Route path="/categories" element={<Categories />}></Route>
					<Route
						path="/category/:categoryId"
						element={<Category />}
					></Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
			<Footer />
		</main>
	);
}

export default App;
