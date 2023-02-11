import { useTransition, animated } from "@react-spring/web";
import React from "react";
import { A } from "shared/components/elements";
import { useThemeStore } from "shared/stores/theme.store";
import { color, font, shadow, unit } from "shared/styles/tokens";
import { TNavItem } from "shared/types/types";
import styled from "styled-components";
import Branch from "shared/assets/branch.svg";
import Flower from "shared/assets/flower_icon.svg";

type NavDropdownProps = {
	dropdownState: {
		show: boolean;
		content?: TNavItem[];
	};
	onCloseDropdown: () => void;
};

export const NavDropdown: React.FC<NavDropdownProps> = ({
	dropdownState,
	onCloseDropdown,
}) => {
	const { toggleTheme, theme } = useThemeStore();
	const { show, content } = dropdownState;
	const transitions = useTransition(show, {
		from: { height: 0, opacity: -1 },
		enter: { height: 300, opacity: 1 },
		leave: { height: 0, opacity: -1 },
	});
	return transitions(
		(style, item) =>
			item &&
			!!content && (
				<NavDropdownContainer style={style}>
					<NavDropdownList>
						{content.map((content) => (
							<NavDropdownItem key={content.label}>
								<NavDropdownLink href={content.link}>
									{content.label}
								</NavDropdownLink>
							</NavDropdownItem>
						))}
						<NavDropdownCloseButton onClick={onCloseDropdown}>
							<FlowerIcon />
						</NavDropdownCloseButton>
					</NavDropdownList>
					<BranchDecorLeft />
					<BranchDecorRight />
				</NavDropdownContainer>
			)
	);
};

const NavDropdownContainer = styled(animated.div)`
  position: absolute;
  width: 100%;
  top: 100%;
  overflow: hidden;
  padding-bottom: ${unit.p5};
  color: ${color.primary200};
`;

const NavDropdownList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: start;
  padding: ${unit.p5} 0 ${unit.p7} 0;
  gap: ${unit.m5};
  align-items: center;
  background-color: ${color.bg200};
  box-shadow: ${shadow.s2};
`;

const NavDropdownItem = styled.li`
  list-style-type: none;
`;

const NavDropdownLink = styled(A)`
  padding: ${unit.p3} ${unit.p5};
  transition: all 100ms ease-in-out;
  font-family: ${font.abel};
  font-size: ${unit.f2};
  text-transform: uppercase;
  text-align: center;
  color: ${color.gray900};
  letter-spacing: 0.25rem;
  transition: all 250ms ease-in-out;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${color.gray900};
  }
`;

const NavDropdownCloseButton = styled.button`
  all: unset;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  bottom: ${unit.p5};
  left: calc(50% - 25px);
  text-align: center;
  margin-top: auto;
  transition: all 250ms ease-in-out;
  border: 1px solid transparent;
  &:hover {
    transform: scale(1.1) rotate(90deg);
    border-color: ${color.gray300};
  }
`;

const BranchDecorLeft = styled(Branch)`
  position: absolute;
  top: ${unit.p4};
  left: 0;
  width: 300px;
`;

const BranchDecorRight = styled(Branch)`
  position: absolute;
  top: ${unit.p4};
  right: 0;
  width: 300px;
  transform: scaleX(-1);
`;

const FlowerIcon = styled(Flower)`
  height: 40px;
  width: 40px;
`;
