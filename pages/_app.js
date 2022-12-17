import Navbar from '../components/Navbar';
import Head from 'next/head';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link rel='icon' href='/icons/favicon.ico' />
			</Head>
			<header>
				<Navbar />
			</header>
			<Component {...pageProps} />
		</>
	);
};

export default App;
