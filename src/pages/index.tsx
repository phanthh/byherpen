import Head from "next/head";
import Image from "next/image";
import Banner from "shared/assets/banner.png";
import PageSeparator from "shared/assets/page_separator.svg";
import { color, unit } from "shared/styles/tokens";
import styled from "styled-components";

import PostSwiper from "shared/components/Display/PostSwiper";
import { Container, H1, P } from "shared/components/elements";

export default function Home() {
  return (
    <>
      <Head>
        <title>By her Pen</title>
      </Head>
      <BannerSection>
        <BannerImage src={Banner} alt={"banner"} />
        {/* <BannerContainer> */}
        {/* 	<BannerImage */}
        {/* 		src={HandPen} */}
        {/* 		width={500} */}
        {/* 		height={500} */}
        {/* 		top={30} */}
        {/* 		left={20} */}
        {/* 		alt={"banner-image"} */}
        {/* 	/> */}
        {/* 	<BannerContent> */}
        {/* 		<BannerHeader>By Her Pen</BannerHeader> */}
        {/* 		<BannerSubHeader> */}
        {/* 			Lorem ipsum dolor sit amet, qui minim labore adipisicing minim */}
        {/* 			sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit */}
        {/* 			amet, qui minim labore adipisicing minim sint cillum sint */}
        {/* 			consectetur cupidatat. */}
        {/* 		</BannerSubHeader> */}
        {/* 	</BannerContent> */}
        {/* </BannerContainer> */}
        <BannerDecor />
      </BannerSection>
      <SectionContainer id={"about"}>
        <SectionHeader>About me</SectionHeader>
        <P>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </P>
      </SectionContainer>
      <SectionContainer id={"posts"}>
        <SectionHeader>Blogs</SectionHeader>
        <P>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </P>
      </SectionContainer>
      <PostSwiper />
      <SectionContainer id={"life"}>
        <SectionHeader>Life</SectionHeader>
        <P>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </P>
      </SectionContainer>
      <SectionContainer id={"art"}>
        <SectionHeader>Art</SectionHeader>
        <P>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </P>
        {/* <CarouselComponent numberPerPage={3}> */}
        {/* 	<CarouselItemComponent>Item 1</CarouselItemComponent> */}
        {/* 	<CarouselItemComponent>Item 2</CarouselItemComponent> */}
        {/* 	<CarouselItemComponent>Item 3</CarouselItemComponent> */}
        {/* 	<CarouselItemComponent>Item 4</CarouselItemComponent> */}
        {/* 	<CarouselItemComponent>Item 5</CarouselItemComponent> */}
        {/* </CarouselComponent> */}
      </SectionContainer>

      <SectionContainer id={"contact"}>
        <SectionHeader>Contact</SectionHeader>
        <P>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </P>
      </SectionContainer>
    </>
  );
}

// @styles
// const BannerImage = styled(NextImage)<{
//   top?: number;
//   left?: number;
//   bottom?: number;
//   right?: number;
//   zIndex?: number;
// }>`
//   position: absolute;
//   object-fit: cover;
//   ${({ top, left, bottom, right }) => css`
//     top: ${top || 0}px;
//     right: ${right || 0}px;
//     bottom: ${bottom || 0}px;
//     left: ${left || 0}px;
//   `}
//   transition: all 500ms ease-in-out;
//   background-color: ${color.background};
//   border-radius: ${units.r4};
//   box-shadow: ${shadows.s1};
//   &:hover {
//     transform: scale(1.05);
//   }
//   ${({ theme }) =>
//     theme.name === "dark" &&
//     css`
//       filter: invert(1);
//     `}
// `;
//
// const BannerContainer = styled(Container)`
//   overflow: hidden;
// `;

const BannerSection = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const BannerImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// const BannerHeader = styled.h1`
//   color: ${color.gray900};
//   font-size: ${units.f8};
//   font-family: ${fonts.aurore};
//   text-align: center;
//   color: ${color.primary};
//   margin: 0 auto;
// `;
//
// const BannerSubHeader = styled.h2`
//   color: ${color.gray900};
//   font-size: ${units.f2};
//   font-family: ${fonts.abel};
//   text-align: center;
//   margin: 0 auto;
// `;
//
// const BannerContent = styled.div`
//   z-index: 50;
//   width: 500px;
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   top: calc(50% - 100px);
//   right: 0;
//   border-radius: ${units.r4};
//   padding: ${units.p4} ${units.p2};
//   backdrop-filter: blur(10px);
//   box-shadow: ${shadows.s1};
//   ${({ theme }) =>
// 		theme.name === "dark" &&
// 		css`
//       border: 1px solid ${color.gray400};
//     `}
// `;

const SectionContainer = styled(Container)`
  padding: ${unit.p5};
  margin: ${unit.m5} auto;
`;

// const SectionContentCard = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
//
// const SectionImage = styled(NextImage)`
//   border-radius: ${units.r4};
//   box-shadow: ${shadows.s1}; `;
//
const SectionHeader = styled(H1)`
  text-decoration: underline;
`;

const BannerDecor = styled(PageSeparator)`
  position: absolute;
  bottom: 0;
  color: ${color.bg200};
  width: 100%;
  height: 150px;
`;
