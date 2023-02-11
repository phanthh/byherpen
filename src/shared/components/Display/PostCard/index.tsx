import React from "react";
import { color, shadow, unit } from "shared/styles/tokens";
import { TPostCard } from "shared/types/types";
import styled, { css } from "styled-components";
import { useSwiperSlide } from "swiper/react";

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
			<PostCardHero src={data.coverImage.url} />
			<PostCardContentPreview>{data.excerpt}</PostCardContentPreview>
		</PostCardContainer>
	);
};

const PostCardContainer = styled.div<{ $active: boolean; $side: boolean }>`
  width: 100;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: ${unit.m2};
  padding: ${unit.p4};
  box-shadow: ${shadow.s2};
  border-radius: ${unit.r2};
  border: 3px solid transparent;
  transition: all 0.3s ease-in-out;

  ${({ $active, $side }) =>
		$active
			? css`
          /* transform: scale(1.1); */
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
`;

const PostCardHero = styled.img`
  border-radius: ${unit.r2};
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const PostCardContentPreview = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default PostCard;
