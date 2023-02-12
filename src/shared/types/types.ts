import { Block, Document } from "@contentful/rich-text-types";

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

export type TPostContent = {
  json: Document;
  links: {
    assets: {
      block: Block;
    };
  };
};

export type TImage = {
  url: string;
  description: string;
};

export type TAuthor = {
  name: string;
  picture: TImage;
};

export type TPost = {
  slug: string;
  title: string;
  titleVn: string;
  content: TPostContent;
  contentVn: TPostContent;
  excerpt: string;
  excerptVn: string;
  coverImage: TImage;
  date: string;
  author: TAuthor;
};

export type TPostCard = Omit<TPost, "content" | "contentVn">;
