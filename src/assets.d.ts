declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.svg' {
	const Component: React.FC;
	export default Component;
}

declare module '*.png' {
	const src: string;
	export default src;
}
