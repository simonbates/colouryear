module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "static/Colouryear.js": "Colouryear.js"
    });

    eleventyConfig.addPassthroughCopy({
        "static/site.css": "site.css"
    });

    return {
        dir: {
            input: "content"
        }
    };
};
