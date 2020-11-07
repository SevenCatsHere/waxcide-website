import React, { ReactNode } from 'react';
import '../../styles/index.scss';
import Header from './Header';
import Footer from './Footer';

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
	<>
		<Header />
		<main>
			{children}
		</main>
		<Footer />
	</>
);

export default Layout;
