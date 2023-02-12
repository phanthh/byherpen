import React from "react";
import { color, font, shadow, unit } from "shared/styles/tokens";
import CardDivider from "shared/assets/decors/card_divider.svg";
import { TPostCard } from "shared/types/types";
import styled, { css } from "styled-components";
import { useSwiperSlide } from "swiper/react";
import { A, Img, ImgContainer } from "shared/components/elements";
import Link from "next/link";
import Image from "next/image";

type PostCardProps = {
  data: TPostCard;
};

const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <PostCardContainer
      $active={swiperSlide.isActive}
      $side={swiperSlide.isNext || swiperSlide.isPrev}
    >
      <PostCardHero>
        <Img src={data.coverImage.url} alt={data.coverImage.description} />
      </PostCardHero>
      <PostCardTitle>{data.title}</PostCardTitle>
      <PostCardExcerpt>{data.excerpt}</PostCardExcerpt>
      <PostCardLink href={`/posts/${data.slug}`}>Read more...</PostCardLink>
      <PostCardAuthor>By {data.author.name}</PostCardAuthor>
      <PostCardDecor />
    </PostCardContainer>
  );
};

const PostCardTitle = styled.span`
  font-size: ${unit.f4};
  font-family: ${font.aurore};
  text-align: center;
`;

const PostCardAuthor = styled.span`
  text-align: center;
  font-size: ${unit.f4};
  font-family: ${font.aurore};
  color: ${color.primary200};
`;

const PostCardLink = styled(A)`
  text-align: right;
  margin-left: auto;
`;

const PostCardContainer = styled.div<{ $active: boolean; $side: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${unit.m2};
  padding: ${unit.p4};
  box-shadow: ${shadow.s2};
  border-radius: ${unit.r2};
  border: 3px solid transparent;
  transition-property: transform, border, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  background-color: ${color.bg200};

  ${({ $active, $side }) =>
    $active
      ? css`
          transform: scale(1.05);
          border: 3px solid ${color.secondary200};
        `
      : $side
      ? css`
          opacity: 0.6;
        `
      : css`
          opacity: 0.2;
          /* transform: scale(0.9); */
        `}

  &:hover {
    transform: scale(1.05);
  }
`;

const PostCardDecor = styled(CardDivider)`
  color: ${color.primary200};
  width: 100%;
  height: 50px;
`;

const PostCardHero = styled(ImgContainer)`
  border-radius: ${unit.r2};
  width: 100%;
  height: 200px;
`;

const PostCardExcerpt = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  font-family: ${font.roboto};
  margin: 0;
`;

export default PostCard;
