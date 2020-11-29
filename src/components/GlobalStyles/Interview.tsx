import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	.interview {
		margin-left: 2rem;

		dt,
		dd {
			position: relative;
			line-height: 1.35;
			&:not(:first-child) {
				margin-top: 1.5rem;
			}
			&:not(:last-child) {
				margin-bottom: 1.5rem;
			}
			&::before {
				position: absolute;
				top: .25rem;
				left: -2rem;
				font-size: 1.6em;
				font-weight: bold;
				font-style: italic;
			}
		}

		dt {
			&::before {
				content: 'Q.';
			}
		}

		dd {
			margin-left: 0;
			&::before {
				content: 'A.';
			}
		}
	}
`;
