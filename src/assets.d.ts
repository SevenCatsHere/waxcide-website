declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.svg' {
	interface Props {
		className?: string;
		width?: number;
		height?: number;
	}
	const Component: React.FC<Props>;
	export default Component;
}

declare module '*.png' {
	const src: string;
	export default src;
}
