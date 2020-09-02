"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Security_1 = __importDefault(require("../lib/Security"));
const scraping_1 = __importDefault(require("../lib/scraping"));
const url = process.argv[2] || "";
const format = process.argv[3] || "default";
/* Validation */
if (!new Security_1.default(url).check()) {
    console.log("第1引数には許可されたURLのみが指定可能です。README.mdを確認してください");
    //   exit();
}
/* Scraping Main Process */
const result = scraping_1.default(url, "h1");
console.log(`result: ${result}`);
/* output */
switch (format) {
    case "default":
        console.log("hoge");
        break;
    default:
        console.log("huga");
        break;
}
//# sourceMappingURL=script.js.map