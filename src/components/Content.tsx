import React from 'react';
import cn from 'classnames';
import styles from './Content.module.scss';

interface Props {
	className?: string;
	html: string;
	variant?: 'pageContent' | 'blank';
}

const Content: React.FC<Props> = ({ className, html, variant }) => (
	<section className="section">
		<div className={cn(styles.contentWrapper, 'content-wrapper', 'w-container')}>
			<div
				className={cn(variant === 'pageContent' ? styles.container : null, className)}
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</div>
	</section>
);

export default Content;
