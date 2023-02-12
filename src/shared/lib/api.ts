import { TPost, TPostCard } from "shared/types/types";
import { gql, POST_CARD_GRAPHQL_FIELDS, POST_GRAPHQL_FIELDS } from "./utils";

type FetchResponse = {
  data?: {
    postCollection?: {
      items?: TPost[] | TPostCard[];
    };
  };
};

const fetchGraphQL = async (query: string, preview = false) => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  );
  return (await res.json()) as FetchResponse;
};

const extractOne = (fetchResponse: FetchResponse) => {
  return fetchResponse?.data?.postCollection?.items?.[0] || null;
};

const extractMany = (fetchResponse: FetchResponse) => {
  return fetchResponse?.data?.postCollection?.items || [];
};

export const getPostCards = async (limit = 100, preview = false) => {
  const resp = await fetchGraphQL(gql`
		query {
			postCollection(where: {slug_exists: true}, preview: ${preview}, order: date_DESC, limit: ${limit}) {
				items {
					${POST_CARD_GRAPHQL_FIELDS}
				}
			}
		}
	`);

  return extractMany(resp) as TPostCard[];
};

export const getAllPostsSlug = async () => {
  const resp = await fetchGraphQL(gql`
    query {
      postCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }
  `);
  return extractMany(resp) as { slug: string }[];
};

export const getPost = async (slug: string, preview = false, more = 0) => {
  const postResp = await fetchGraphQL(gql`
		query {
			postCollection(where: {slug: "${slug}"}, preview: ${preview}, limit: 1) {
				items {
					${POST_GRAPHQL_FIELDS}
				}
			}
		}
	`);

  const morePostResp = await fetchGraphQL(gql`
    query {
			postCollection(where: {slug_not: "${slug}"}, preview: ${preview}, order: date_DESC, limit: ${more})
				items {
					${POST_CARD_GRAPHQL_FIELDS}
				}
			}
		}
	`);

  return {
    post: extractOne(postResp) as TPost | null,
    morePosts: extractMany(morePostResp) as TPostCard[],
  };
};
