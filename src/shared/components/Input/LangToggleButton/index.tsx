import React from "react";
import { ToggleButton } from "shared/components/elements";
import { useLangStore } from "shared/stores/lang.store";
import { color, font } from "shared/styles/tokens";
import styled from "styled-components";

type LangToggleButtonProps = {};

export const LangToggleButton: React.FC<LangToggleButtonProps> = ({ }) => {
	const { toggleLang, lang } = useLangStore();
	return <ToggleLangButton onClick={toggleLang}>{lang}</ToggleLangButton>;
};

const ToggleLangButton = styled(ToggleButton)`
  text-align: center;
  text-transform: uppercase;
  font-family: ${font.abel};
`;
