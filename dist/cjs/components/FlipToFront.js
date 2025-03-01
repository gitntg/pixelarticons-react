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
exports.FlipToFront = void 0;
const react_1 = __importDefault(require("react"));
const FlipToFront = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { d: "M21 3H7v14h14V3zm-2 12H9V5h10v10zM5 7H3v2h2V7zm-2 4h2v2H3v-2zm2 4H3v2h2v-2zm-2 4h2v2H3v-2zm6 0H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z", fill: "currentColor" })));
};
exports.FlipToFront = FlipToFront;
exports.FlipToFront.displayName = 'FlipToFront';
