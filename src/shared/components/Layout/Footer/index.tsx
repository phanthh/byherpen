import React from "react";
import { A, Container } from "shared/components/elements";
import { shadow, unit } from "shared/styles/tokens";
import styled from "styled-components";

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
	return (
		<FooterContainer>
			<FooterGrid>
				<FooterLink href="#">testing 1</FooterLink>
				<FooterLink href="#">testing 1</FooterLink>
				<FooterLink href="#">testing 1</FooterLink>
				<FooterLink href="#">testing 1</FooterLink>
			</FooterGrid>
		</FooterContainer>
	);
};

// @styles
const FooterContainer = styled.div`
  width: 100%;
  box-shadow: ${shadow.s2};
  padding: ${unit.p5};
`;

const FooterGrid = styled(Container)`
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FooterLink = styled(A)``;
