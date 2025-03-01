"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mastodon = void 0;
const react_1 = __importDefault(require("react"));
const Mastodon = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { fill: "currentColor", d: "M7 2v2h10V2H7Zm10 2v2h2V4h-2Zm2 2v8h2V6h-2Zm0 8h-8v2h8v-2Zm-8 2H9v2h2v-2Zm0 2v2h2v-2h-2Zm0 2H7v2h4v-2Zm-4 0v-2H5v2h2Zm-2-2V6H3v12h2ZM5 6h2V4H5v2Zm4 0v2h2V6H9Zm2 2v2h2V8h-2Zm2 0h2V6h-2v2Zm2 0v4h2V8h-2ZM9 8H7v4h2V8Z" })));
};
exports.Mastodon = Mastodon;
exports.Mastodon.displayName = 'Mastodon';
