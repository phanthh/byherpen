import React, { useState } from "react";
import { LangToggleButton } from "shared/components/Input/LangToggleButton";
import { ThemeToggleButton } from "shared/components/Input/ThemeToggleButton";
import { useScrollDown } from "shared/hooks";
import { color, font, shadow, unit } from "shared/styles/tokens";
import { TNavItem } from "shared/types/types";
import styled, { css } from "styled-components";
import { A } from "../../elements";
import { NavDropdown } from "./NavDropdown";

type NavBarProps = {};

const navStruct: TNavItem[] = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "art",
    link: "/art",
    children: [
      {
        label: "slices of life",
        link: "/art/slices-of-life",
      },
      {
        label: "portfolio",
        link: "/art/portfolio",
      },
    ],
  },
  {
    label: "byherpen",
    link: "/",
    center: true,
  },
  {
    label: "life",
    link: "/life",
    children: [
      {
        label: "study",
        link: "/life/study",
      },
      {
        label: "by the kitchen",

        link: "/life/by-the-kitchen",
      },
      {
        label: "little stories",
        link: "/life/little-stories",
      },
    ],
  },
  {
    label: "contact",
    link: "/contact",
    children: [
      {
        label: "youtube",
        link: "#",
      },
      {
        label: "instagram",
        link: "#",
      },
      {
        label: "pinterest",
        link: "#",
      },
    ],
  },
];

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const scrollDown = useScrollDown();

  const [dropdownState, setDropdownState] = useState({
    show: false,
    content: [] as TNavItem[] | undefined,
  });

  const onCloseDropdown = () => {
    setDropdownState((state) => ({ ...state, show: false }));
  };

  return (
    <>
      <NavBarContainer onMouseLeave={onCloseDropdown} $hide={scrollDown}>
        <NavBarList>
          {navStruct.map((navItem) => (
            <NavBarItem key={navItem.label}>
              <NavLink
                $center={navItem.center}
                href={navItem.link}
                {...(!!navItem.children
                  ? {
                      onMouseEnter: () =>
                        setDropdownState((state) => ({
                          ...state,
                          show: true,
                          content: navItem.children,
                        })),
                    }
                  : {})}
              >
                {navItem.label}
              </NavLink>
            </NavBarItem>
          ))}
          <NavBarItem>
            <ThemeToggleButton />
            <LangToggleButton />
          </NavBarItem>
        </NavBarList>
        <NavDropdown
          dropdownState={dropdownState}
          onCloseDropdown={onCloseDropdown}
        />
      </NavBarContainer>
    </>
  );
};

// @styles
const NavBarContainer = styled.nav<{ $hide: boolean }>`
  position: sticky;
  top: -1px;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${color.bg200};
  box-shadow: ${shadow.s2};

  transition: transform 0.2s ease-in-out;

  ${({ $hide }) =>
    $hide &&
    css`
      transform: translateY(-100%);
    `}
`;

const NavBarList = styled.ul`
  all: unset;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  max-width: 1200px;
  width: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;
  gap: ${unit.m5};
  align-items: center;
`;

const NavBarItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavLink = styled(A)<{ $center?: boolean }>`
  margin: auto;
  font-family: ${font.abel};
  font-size: ${unit.f2};
  text-transform: uppercase;
  color: ${color.fg200};
  letter-spacing: 0.25rem;

  ${({ $center }) =>
    !!$center &&
    css`
      text-transform: lowercase;
      font-size: ${unit.f5};
      font-family: ${font.aurore};
      color: ${color.primary200};
      border-bottom: none;
      &:hover {
        border-bottom: none;
      }
    `}
`;
