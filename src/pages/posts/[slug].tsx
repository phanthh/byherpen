import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { TPost, TPostCard } from "shared/types/types";

import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPostsSlug, getPost } from "shared/lib/api";

type PageProps = {
	preview: boolean;
	post?: TPost;
	morePosts?: TPostCard[];
};

export const getStaticProps: GetStaticProps<
	PageProps,
	{ slug: string }
> = async ({ params, preview = false }) => {
	const data = await getPost(params?.slug ?? "", preview);
	return {
		props: {
			preview,
			post: data.post,
			morePosts: data.morePosts,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await getAllPostsSlug();
	const paths = data?.map(({ slug }) => `/posts/${slug}`) ?? [];
	return {
		paths: paths,
		fallback: true,
	};
};

export const Post = ({
	preview,
	post,
	morePosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();

	if (!router.isFallback && !post) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		post && (
			<>
				{preview && <h1>PREVIEW MODE</h1>}
				<h2>{post.title}</h2>
				<article>
					<Head>
						<title>{post.title} | By her Pen</title>
						<meta property="og:image" content={post.coverImage.url} />
					</Head>
					<h2>{post.title}</h2>
					<span>{post.date}</span>
					<span>{post.author.name}</span>
				</article>
				{morePosts?.map((postCard) => (
					<>
						<hr />
						<div>{postCard.title}</div>
						<div>{postCard.date}</div>
						<div>{postCard.excerpt}</div>
					</>
				))}
			</>
		)
	);
};

export default Post;
