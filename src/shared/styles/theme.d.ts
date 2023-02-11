import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		name: string;
		colors: {
			primary100: string;
			primary200: string;
			primary300: string;

			secondary100: string;
			secondary200: string;
			secondary300: string;

			fg100: string;
			fg200: string;
			fg300: string;

			bg100: string;
			bg200: string;
			bg300: string;
		};
	}
}
