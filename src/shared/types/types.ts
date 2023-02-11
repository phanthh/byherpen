declare global {
	namespace NodeJS {
		interface ProcessEnv {
			CONTENTFUL_SPACE_ID?: string;
			CONTENTFUL_ACCESS_TOKEN?: string;
			CONTENTFUL_PREVIEW_ACCESS_TOKEN?: string;
			CONTENTFUL_PREVIEW_SECRET?: string;
			CONTENTFUL_REVALIDATE_SECRET?: string;
		}
	}
}

export type TNavItem = {
	label: string;
	link: string;
	children?: TNavItem[];
	center?: boolean;
};

export type TLang = "en" | "vn";

export type TPost = {
	slug: string;
	title: string;
	titleVn: string;
	content: string;
	contentVn: string;
	excerpt: string;
	excerptVn: string;
	coverImage: {
		url: string;
	};
	date: string;
	author: {
		name: string;
		picture: {
			url: string;
		};
	};
};

export type TPostCard = Omit<TPost, "content" | "contentVn">;
