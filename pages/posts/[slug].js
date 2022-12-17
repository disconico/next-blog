import Head from 'next/head';
import React from 'react';
import { getPost, getSlugs } from '../../lib/getPosts';

export async function getStaticPaths() {
	const slugs = await getSlugs();
	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const post = await getPost(slug);
	return {
		props: { post },
	};
}

const PostPage = ({ post }) => {
	return (
		<>
			<Head>
				<title>{`${post.title} - My Blog`}</title>
			</Head>
			<main>
				<h1>{post.title} </h1>
				<p>{post.date} </p>

				<article dangerouslySetInnerHTML={{ __html: post.body }} />
			</main>
		</>
	);
};

export default PostPage;
