import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About';
import HomePage from './components/pages/HomePage/HomePage';
import Post from './components/pages/post/Post';
import AddPost from './components/pages/post/AddPost';
import Container from './components/views/Container';
import NavBar from './components/views/NavBar';
import NotFound from './components/pages/NotFound.jsx';
function App() {
	return (
		<main>
			<NavBar />
			<Container>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<About />} />
					<Route path="/post/:postId" element={<Post />} />
					<Route path="/post/add" element={<AddPost />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</main>
	);
}

export default App;
