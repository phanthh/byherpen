import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { TPost, TPostCard } from "shared/types/types";

import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPostsSlug, getPost } from "shared/lib/api";
import PostBody from "shared/components/Display/Post/PostBody";
import styled from "styled-components";
import { Container, H1, Img, ImgContainer } from "shared/components/elements";
import { font } from "shared/styles/tokens";
import { useLangStore } from "shared/stores/lang.store";

type PageProps = {
  preview: boolean;
  post: TPost | null;
  morePosts: TPostCard[];
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
  const paths = data.map(({ slug }) => `/posts/${slug}`);
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
  const { lang } = useLangStore();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    post && (
      <>
        <Head>
          <title>{post.title} | By her Pen</title>
          <meta property="og:image" content={post.coverImage.url} />
        </Head>
        {preview && <h1>PREVIEW MODE</h1>}
        <PostHeader>
          <PostBanner>
            <Img src={post.coverImage.url} alt={post.coverImage.description} />
          </PostBanner>
          <PostTitle>{post.title}</PostTitle>
          <PostSubtitle>
            {new Date(post.date).toLocaleDateString()} | By {post.author.name}
          </PostSubtitle>
        </PostHeader>
        <PostBody content={lang === "vn" ? post.contentVn : post.content} />
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

const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostBanner = styled(ImgContainer)`
  height: 60vh;
  width: 100%;
`;

const PostTitle = styled(H1)`
  font-family: ${font.aurore};
  text-align: center;
`;

const PostSubtitle = styled.span``;

export default Post;
