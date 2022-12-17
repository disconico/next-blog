import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/getPosts';

export async function getStaticProps() {
	const posts = await getPosts();
	return {
		props: { posts },
	};
}

const HomePage = ({ posts }) => {
	return (
		<>
			<Head>
				<title>My Blog</title>
			</Head>
			<main>
				<h1>My blog</h1>
				<ul>
					{posts.map((post, index) => (
						<li key={index}>
							<Link href={`/posts/${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
};

export default HomePage;
