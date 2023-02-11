import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { color, font, shadow, unit } from "shared/styles/tokens";
import styled, { css, StyledProps } from "styled-components";

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

export const FlexCol = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  ${({ gap }) =>
		!!gap &&
		css`
      gap: ${gap};
    `}
`;

export const FlexRow = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: row;
  ${({ gap }) =>
		!!gap &&
		css`
      gap: ${gap};
    `}
`;

export const A = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button``;

export const H1 = styled.h1`
  font-weight: 200;
  font-family: ${font.abel};
  font-size: ${unit.f5};
  color: ${color.fg200};
  text-transform: uppercase;
`;

export const P = styled.p`
  font-family: ${font.abel};
  font-size: ${unit.f2};
  color: ${color.fg200};
`;

export const Img = styled.img``;

export const NextImage = styled(Image) <StyledProps<ImageProps>>`
  ${({ width }) =>
		width !== undefined &&
		css`
      width: ${width}px;
    `}
  ${({ height }) =>
		height !== undefined &&
		css`
      width: ${height}px;
    `}
`;

export const Card = styled.div`
  border-radius: ${unit.r4};
  box-shadow: ${shadow.s1};
`;

export const ToggleButton = styled(Button)`
  all: unset;
  width: 25px;
  height: 25px;
  border: 1px solid ${color.primary200};
  border-radius: ${unit.r3};
  padding: ${unit.p2};
  color: ${color.primary200};
  box-shadow: ${shadow.s1};
  transition: all 0.1s ease-in-out;

  &:active {
    box-shadow: none;
  }
`;
