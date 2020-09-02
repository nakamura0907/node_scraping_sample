"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli = require("cheerio-httpcli");
const scraping = (url, tag) => {
    const param = {};
    let result = [];
    cli.fetch(url, param, (err, $, res) => {
        if (err) {
            console.error(err);
            return;
        }
        $(tag).each(function (idx) {
            const text = $(this).text();
            result = [...result, text];
            console.log(result);
        });
    });
    return result;
};
exports.default = scraping;
//# sourceMappingURL=scraping.js.map