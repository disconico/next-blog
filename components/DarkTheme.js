import React from 'react';

const DarkTheme = () => {
	return (
		<style jsx global>{`
			/* Dark Theme */
			:root {
				--background-color: black;
				--link-color: yellow;
				--text-color: white;
			}
		`}</style>
	);
};

export default DarkTheme;
