import React from 'react';
import cn from 'classnames';
import styles from './Content.module.scss';

interface Props {
	className?: string;
	html: string;
	variant?: 'pageContent' | 'blank';
}

const Content: React.FC<Props> = ({ className, html, variant }) => (
	<div
		className={cn(variant === 'pageContent' ? styles.container : null, className)}
		dangerouslySetInnerHTML={{ __html: html }}
	/>
);

export default Content;
