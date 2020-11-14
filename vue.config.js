module.exports = {
	lintOnSave: false,
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/styles/index.scss";`,
			},
		},
	},
};
