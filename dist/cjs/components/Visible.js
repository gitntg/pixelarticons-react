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
exports.Visible = void 0;
const react_1 = __importDefault(require("react"));
const Visible = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { fill: "currentColor", d: "M0 0h2v2H0V0Zm2 2h2v2H2V2Zm18 0h2v2h-2V2Zm2-2h2v2h-2V0ZM2 20h2v2H2v-2Zm-2 2h2v2H0v-2Zm20-2h2v2h-2v-2Zm2 2h2v2h-2v-2ZM8 17h8v2H8v-2Zm8-2h4v2h-4v-2Zm-8 0H4v2h4v-2Zm8-8h4v2h-4V7ZM8 7H4v2h4V7Zm12 2h2v2h-2V9ZM4 9H2v2h2V9Zm18 2h2v2h-2v-2ZM2 11H0v2h2v-2Zm18 2h2v2h-2v-2ZM4 13H2v2h2v-2Zm4-8h8v2H8V5Zm2 5h4v4h-4v-4Z" })));
};
exports.Visible = Visible;
exports.Visible.displayName = 'Visible';
