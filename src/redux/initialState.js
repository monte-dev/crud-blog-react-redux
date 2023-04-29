const initialState = {
	posts: [
		{
			id: '1',
			title: 'React',
			shortDescription:
				'Learn the basics of React and start building dynamic user interfaces!',
			content:
				"React is a JavaScript library that allows you to build reusable components for your user interface. In this article, we'll cover the fundamentals of React, including how to create components, manage state, and handle user events. By the end, you'll have a solid understanding of React and be ready to start building your own web applications.",
			publishedDate: new Date('02 04 2023'),
			category: 'Movie',
			author: 'John Morrison',
		},

		{
			id: '2',
			title: 'Redux',
			shortDescription:
				'Learn how to use Redux to manage state in your React',
			content:
				"Redux is a state management library that works seamlessly with React. In this article, we'll cover the basics of Redux, including how to create a store, dispatch actions, and handle state changes. We'll also explore best practices for using Redux in your React applications.",
			publishedDate: new Date('02 02 2022'),
			category: 'News',

			author: 'Mark Smith',
		},

		{
			id: '3',
			title: 'React Router',
			shortDescription:
				'Learn how to use React Router to create dynamic routes',
			content:
				"React Router is a powerful library for managing navigation in your React applications. In this article, we'll cover the basics of React Router, including how to set up routes, navigate between pages, and handle dynamic URLs. By the end, you'll be able to create dynamic, navigable user interfaces that provide great user experiences.",
			publishedDate: new Date('12 06 2022'),
			category: 'Sport',
			author: 'Brad Morrison',
		},

		{
			id: '4',
			title: 'Advanced React',
			shortDescription:
				'Take your React skills to the next level with these best practices',
			content:
				"React is a powerful library for building dynamic user interfaces, but as your applications grow in complexity, it can be challenging to keep everything organized and maintainable. In this article, we'll cover advanced techniques for building scalable React applications, including how to use higher-order components, manage state with Redux, and optimize performance.",
			publishedDate: new Date('02 01 2023'),
			category: 'Sport',
			author: 'John Doe',
		},
	],
	categories: [
		{ id: 1, name: 'Sport' },
		{ id: 2, name: 'News' },
		{ id: 3, name: 'Movie' },
	],
};
export default initialState;
