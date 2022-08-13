import React, { useEffect, useState } from 'react';
import Posts from './components/posts';
import PostLoadingComponent from './components/postLoading';
import Header from './components/header';
import Intro from './components/Intro';
import axiosInstance from './axios';
import Navigation from './components/Navigation'

function App() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get('https://orca-app-sdz5v.ondigitalocean.app/api/posts/').then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
		});
	}, [setAppState]);
	return (
		<div className='home'>
			< Header />
			< Intro />
		</div>
	);
}
export default App;

