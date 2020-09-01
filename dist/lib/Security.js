"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Security {
    constructor(url) {
        this.whitelist = ["http://nakamura0907.html.xdomain.jp"];
        this.url = url;
    }
    check() {
        const result = [this.checkFormat(), this.checkWhitelist()];
        return result.every((value) => value === true);
    }
    checkFormat() {
        return /https?:\/\/[\w!?/+\-_~;.,*&@#$%()'[\]]+/.test(this.url);
    }
    checkWhitelist() {
        return this.whitelist.some((value) => this.url.startsWith(value));
    }
}
exports.default = Security;
//# sourceMappingURL=Security.js.map