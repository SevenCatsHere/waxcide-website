import React from 'react';
import TemplateStyles from './Template';
import BaseStyles from './Base';
import InterviewStyles from './Interview';

const GlobalStyles: React.FC = () => (
	<>
		<TemplateStyles />
		<BaseStyles />
		<InterviewStyles />
	</>
);

export default GlobalStyles;
