import type { AppProps } from "next/app";
import { Layout } from "shared/components/Layout";
import { useThemeStore } from "shared/stores/theme.store";
import { GlobalStyle } from "shared/styles/globalStyles";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
	const theme = useThemeStore((store) => store.theme);
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
