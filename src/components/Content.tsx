import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

type Variant = 'pageContent' | 'blank';

const ContentWrapper = styled.div`
	padding: .5rem 1.25rem;
	border: 1px solid rgba(255, 255, 255, .25);
	border-radius: 15px;
	background-color: rgba(0, 0, 0, .4);
`;

interface ContentHtmlProps {
	variant?: Variant;
}

const ContentHtml = styled.div<ContentHtmlProps>`
	${({ variant }) => (variant === 'pageContent' ? 'background-color: #333;' : '')}
`;

interface Props {
	className?: string;
	html: string;
	variant?: Variant;
}

const Content: React.FC<Props> = ({ className, html, variant }) => (
	<section className="section">
		<ContentWrapper className={cn('content-wrapper', 'w-container', className)}>
			<ContentHtml variant={variant} dangerouslySetInnerHTML={{ __html: html }} />
		</ContentWrapper>
	</section>
);

export default Content;
