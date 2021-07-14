module.exports = function(cfg) {
	cfg.addPassthroughCopy({ "src/public": "/" })
	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "components",
		},
		htmlTemplateEngine: "njk",
	}
};
