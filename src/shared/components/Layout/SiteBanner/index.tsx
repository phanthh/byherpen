import React from "react";
import { color, font } from "shared/styles/tokens";
import styled from "styled-components";

type SiteBannerProps = {};

export const SiteBanner: React.FC<SiteBannerProps> = ({}) => (
  <SiteBannerContainer>🇻🇳🇫🇮 Some banner text here 🇻🇳🇫🇮</SiteBannerContainer>
);

export const SiteBannerContainer = styled.div`
  height: 25px;
  width: 100%;
  background-color: ${color.primary100};
  color: ${color.fg200};
  font-family: ${font.roboto};
  text-align: center;
`;
