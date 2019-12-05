import React from 'react';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Router />
				</Layout>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
