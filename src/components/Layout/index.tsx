import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
`;

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
	<Container>
		<Header />
		<main>
			{children}
		</main>
		<Footer />
	</Container>
);

export default Layout;
