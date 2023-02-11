import React from "react";
import { postCards } from "shared/data";
import { color, unit } from "shared/styles/tokens";
import styled from "styled-components";
import { A11y, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import PostCard from "../PostCard";

type PostSwiperProps = {};

const PostSwiper: React.FC<PostSwiperProps> = () => {
	return (
		<StyledSwiper
			// install Swiper modules
			modules={[Pagination, A11y]}
			spaceBetween={30}
			slidesPerView={5}
			pagination={{ dynamicBullets: true }}
			centeredSlides={true}
			slideToClickedSlide={true}
		>
			{postCards.map((card) => (
				<SwiperSlide key={card.slug}>
					<PostCard data={card} />
				</SwiperSlide>
			))}
		</StyledSwiper>
	);
};

const StyledSwiper = styled(Swiper)`
  padding: ${unit.p7};

  & .swiper-pagination-bullet-active {
    background-color: ${color.primary200};
  }
`;

export default PostSwiper;
