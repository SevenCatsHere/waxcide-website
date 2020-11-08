import React, { ReactNode } from 'react';
import '../../styles/index.scss';
import styles from './index.module.scss';
import Header from './Header';
import Footer from './Footer';

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
	<div className={styles.wrapper}>
		<Header />
		<main>
			{children}
		</main>
		<Footer />
	</div>
);

export default Layout;
