import Head from "next/head";
import Image from "next/image";
import Banner from "shared/assets/banner.png";
import PageSeparator from "shared/assets/decors/page_separator.svg";
import InstagramIcon from "shared/assets/icons/instagram.svg";
import PinterestIcon from "shared/assets/icons/pinterest.svg";
import YouTubeIcon from "shared/assets/icons/youtube.svg";
import { color, font, unit } from "shared/styles/tokens";
import styled from "styled-components";

import PostSwiper from "shared/components/Display/PostSwiper";
import { Container, H1, Img, P } from "shared/components/elements";
import { GetStaticProps } from "next";
import { TPostCard } from "shared/types/types";
import { getPostCards } from "shared/lib/api";

type HomeProps = {
  postCards: TPostCard[];
};

export const getStaticProps: GetStaticProps<HomeProps, {}> = async ({}) => {
  const data = await getPostCards();
  return {
    props: {
      postCards: data,
    },
  };
};

export default function Home({ postCards }: HomeProps) {
  return (
    <>
      <Head>
        <title>by her pen</title>
      </Head>
      <BannerSection>
        <Img src={Banner} alt="banner" />
        <BannerContentContainer>
          <BannerContentHeader>By Her Pen</BannerContentHeader>
          <BannerContentSubHeader>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </BannerContentSubHeader>
          <BannerContactContainer>
            <InstagramIcon />
            <YouTubeIcon />
            <PinterestIcon />
          </BannerContactContainer>
        </BannerContentContainer>
        <BannerSectionDecor />
      </BannerSection>
      <Section id={"about"}>
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
      </Section>
      <PostsSection id={"posts"}>
        <PostsSectionImage src={Banner} alt="posts-section-background" />
        <PostsSectionDecorTop />
        <SectionHeader>Blogs</SectionHeader>
        <P style={{ zIndex: 1 }}>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </P>
        <PostSwiper postCards={postCards} />
        <PostsSectionDecorBottom />
      </PostsSection>
      <Section id={"life"}>
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
      </Section>
      <Section id={"art"}>
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
      </Section>

      {/* <Section id={"contact"}> */}
      {/*   <SectionHeader>Contact</SectionHeader> */}
      {/*   <P> */}
      {/*     Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit */}
      {/*     enim labore culpa sint ad nisi Lorem pariatur mollit ex esse */}
      {/*     exercitation amet. Nisi anim cupidatat excepteur officia. */}
      {/*     Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate */}
      {/*     voluptate dolor minim nulla est proident. Nostrud officia pariatur ut */}
      {/*     officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit */}
      {/*     commodo officia dolor Lorem duis laboris cupidatat officia voluptate. */}
      {/*     Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis */}
      {/*     officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis */}
      {/*     sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea */}
      {/*     consectetur et est culpa et culpa duis. */}
      {/*   </P> */}
      {/* </Section> */}
    </>
  );
}

const Section = styled(Container)`
  padding: ${unit.p5};
  margin: ${unit.m5} auto;
`;

const SectionHeader = styled(H1)`
  z-index: 1;
`;

//////////////

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

const BannerSectionDecor = styled(PageSeparator)`
  position: absolute;
  bottom: 0;
  color: ${color.bg200};
  width: 100%;
  height: 150px;
`;

const BannerContentContainer = styled.div`
  position: absolute;
  right: 15vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  height: 100%;
`;

const BannerContactContainer = styled.div`
  margin-top: ${unit.m3};
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  align-items: center;
  color: ${color.primary200};
  position: relative;
  gap: ${unit.m2};
  & svg {
    transform: scale(1.5);
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.6);
    }
  }
`;

const BannerContentHeader = styled.h1`
  margin: 0;
  font-family: ${font.aurore};
  color: ${color.fg200};
  font-size: ${unit.f7};
`;

const BannerContentSubHeader = styled.p`
  max-width: 500px;
  text-align: center;
  font-family: ${font.roboto};
  color: ${color.fg200};
  font-size: ${unit.f3};
`;

/////////////////

const PostsSection = styled.div`
  position: relative;
  max-width: unset;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  overflow: hidden;
`;

const PostsSectionImage = styled(Image)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(10px);
`;

const PostsSectionDecorTop = styled(PageSeparator)`
  z-index: 1;
  position: absolute;
  top: 0;
  color: ${color.bg200};
  width: 100%;
  height: 150px;
  transform: scaleY(-1);
`;

const PostsSectionDecorBottom = styled(PageSeparator)`
  z-index: 1;
  position: absolute;
  bottom: 0;
  color: ${color.bg200};
  width: 100%;
  height: 150px;
`;
