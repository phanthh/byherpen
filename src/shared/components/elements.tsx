import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { color, font, shadow, unit } from "shared/styles/tokens";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  position: relative;
  flex-direction: column;
`;

const linkStyle = css`
  text-decoration: none;
  transition: border-bottom 250ms ease-in-out;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${color.primary200};
  }
`;

export const A = styled(Link)`
  ${linkStyle}
`;

export const EA = styled.a`
  ${linkStyle}
`;

export const H1 = styled.h1`
  font-weight: 200;
  font-family: ${font.abel};
  font-size: ${unit.f5};
  color: ${color.fg200};
  text-transform: uppercase;
`;

export const Img = styled(Image).attrs<ImageProps>({
  fill: true,
})`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const P = styled.p`
  font-family: ${font.abel};
  font-size: ${unit.f2};
  color: ${color.fg200};
`;

export const Button = styled.button`
  all: unset;
  box-shadow: ${shadow.s1};
  transition: box-shadow 0.1s ease-in-out;
  border: 1px solid ${color.primary200};
  border-radius: ${unit.r3};

  &:active {
    box-shadow: none;
  }
`;

export const ToggleButton = styled(Button)`
  width: 25px;
  height: 25px;
  padding: ${unit.p2};
  color: ${color.primary200};
`;
