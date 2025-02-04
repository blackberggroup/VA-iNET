module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Define the Fellows collection
  eleventyConfig.addCollection("product", function (collectionApi) {
    return collectionApi.getFilteredByGlob("product/*.md");
  });

  let pathPrefix = "/";

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }

  return {
    pathPrefix: pathPrefix,
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      layouts: "_layouts",
      data: "_data",
    },
  };
};
