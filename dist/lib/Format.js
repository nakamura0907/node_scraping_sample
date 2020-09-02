"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Format {
    constructor(data) {
        this.data = data;
    }
    run(format) {
        switch (format) {
            case "default":
                console.log(this.data);
                break;
            case "json":
                console.log(this.toJson());
                break;
            default:
                console.log(this.data);
                break;
        }
    }
    toJson() {
        return JSON.stringify(this.data);
    }
}
exports.default = Format;
//# sourceMappingURL=Format.js.map