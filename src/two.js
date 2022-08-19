"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatName = void 0;
var formatName = function (name) {
    return "".concat(name === null || name === void 0 ? void 0 : name.last).concat((name === null || name === void 0 ? void 0 : name.last) && (name === null || name === void 0 ? void 0 : name.first) ? ', ' : '').concat(name === null || name === void 0 ? void 0 : name.first);
};
exports.formatName = formatName;
