"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Security_1 = __importDefault(require("../lib/Security"));
const scraping_1 = __importDefault(require("../lib/scraping"));
const Format_1 = __importDefault(require("../lib/Format"));
const process_1 = require("process");
const url = process.argv[2] || "http://nakamura0907.html.xdomain.jp/";
const format = process.argv[3] || "default";
/* Validation */
if (!new Security_1.default(url).check()) {
    console.log("第1引数には許可されたURLのみが指定可能です。README.mdを確認してください");
    process_1.exit();
}
/* Scraping Main Process */
scraping_1.default(url).then((result) => {
    /* output */
    new Format_1.default(result).run(format);
});
//# sourceMappingURL=script.js.map