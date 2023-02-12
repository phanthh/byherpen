import React from "react";
import InstagramIcon from "shared/assets/icons/instagram.svg";
import PinterestIcon from "shared/assets/icons/pinterest.svg";
import YouTubeIcon from "shared/assets/icons/youtube.svg";
import { A, EA } from "shared/components/elements";
import { color, shadow, unit } from "shared/styles/tokens";
import styled from "styled-components";

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
	return (
		<FooterContainer>
			<FooterRow>
				<FooterLink href="#">
					<InstagramIcon />
					Instagram
				</FooterLink>
				<FooterLink href="#">
					<YouTubeIcon />
					Youtube
				</FooterLink>
				<FooterLink href="#">
					<PinterestIcon />
					Pinterest
				</FooterLink>
			</FooterRow>
			<FooterAttribute>
				Made by <EA href="https://github.com/phanthh/">@phanthh</EA>
			</FooterAttribute>
		</FooterContainer>
	);
};

// @styles
const FooterContainer = styled.div`
  width: 100%;
  box-shadow: ${shadow.s2};
  padding: ${unit.p5};
  background-color: ${color.bg300};
`;

const FooterRow = styled.div`
  margin: auto;
  max-width: 960px;
  display: flex;
  justify-content: space-evenly;
`;

const FooterLink = styled(A)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${unit.m1};
  color: ${color.primary200};
`;

const FooterAttribute = styled.div`
  text-align: center;
  color: ${color.primary200};
  padding-top: ${unit.p5};
`;
