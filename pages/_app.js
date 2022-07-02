import '../styles/globals.css';
import '../styles/Home.scss';
import { Provider } from 'react-redux';

import store from '../redux/configureStore';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
