const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("stats.js");
  
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addCollection('books', collection => {
    return collection.getFilteredByGlob('books/*.md');
  });

  eleventyConfig.addCollection('games', collection => {
    return collection.getFilteredByGlob('games/*.md');
  });

  eleventyConfig.addCollection('series', collection => {
    return collection.getFilteredByGlob('series/*.md');
  });

  eleventyConfig.addCollection('movies', collection => {
    return collection.getFilteredByGlob('movies/*.md');
  });

  eleventyConfig.addFilter("size", (posts) => {
		return posts.length;
  });
  
};