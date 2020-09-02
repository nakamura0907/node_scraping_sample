"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli = require("cheerio-httpcli");
const scraping = (url) => {
    return new Promise((resolve) => {
        let result = [];
        const param = {};
        cli.fetch(url, param, (err, $, res) => {
            if (err) {
                console.error(err);
                return;
            }
            for (let i = 1; i <= 6; i++) {
                $(`h${i}`).each(function (idx) {
                    const key = `h${i}`;
                    const text = $(this).text(); // get hi text
                    result = [...result, { tag: key, text }];
                });
            }
            resolve(result);
        });
    });
};
const scrapingWrap = async (url) => {
    return await scraping(url);
};
exports.default = scrapingWrap;
//# sourceMappingURL=scraping.js.map