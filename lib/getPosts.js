import { readdir, readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export const getSlugs = async () => {
	const suffix = '.md';
	const files = await readdir('content/posts');
	return files
		.filter((file) => file.endsWith(suffix))
		.map((file) => file.slice(0, -suffix.length));
};

export const getPost = async (slug) => {
	const source = await readFile(`content/posts/${slug}.md`, 'utf-8');
	const { data, content } = matter(source);
	const html = marked(content);
	return {
		title: data.title,
		date: data.date,
		body: html,
	};
};

export const getPosts = async () => {
	const slugs = await getSlugs();
	const posts = [];
	for (const slug of slugs) {
		const post = await getPost(slug);
		posts.push({ slug, ...post });
	}

	return posts;
};
