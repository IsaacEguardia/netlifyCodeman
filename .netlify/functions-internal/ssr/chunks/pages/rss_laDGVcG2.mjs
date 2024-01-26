import rss from '@astrojs/rss';
import { g as getCollection } from './__c2qsfxMb.mjs';
import { s as siteConfig } from './Passwordseguros_lXrFkMie.mjs';

async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: siteConfig.name,
		description: siteConfig.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { get };
