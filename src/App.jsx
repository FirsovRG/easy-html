import React from 'react';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Router />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
