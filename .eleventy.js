module.exports = function (eleventyConfig) {
  // Zkopírovat images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");

  // Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fslightbox.js");
  eleventyConfig.addPassthroughCopy("siema.min.js");
  eleventyConfig.addPassthroughCopy("reveal.js");
  eleventyConfig.addPassthroughCopy("toggleportfolio.js");
  eleventyConfig.addPassthroughCopy("togglenabidka.js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("slick");

  // Zkopírovat všechny *.js soubory na stejné umístění do _site
  // eleventyConfig.addPassthroughCopy("**/*.js");

  // Přidat custom filtr pro formátování data
  eleventyConfig.addFilter('dateFormat', require('./_filters/date-format'));

  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });
  

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
