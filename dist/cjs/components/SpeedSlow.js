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
exports.SpeedSlow = void 0;
const react_1 = __importDefault(require("react"));
const SpeedSlow = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { d: "M9 5h6v2H9V5zm10 4h-4V7h4v2zm2 2h-2V9h2v2zm0 6v-6h2v6h-2zm0 0v2h-2v-2h2zM1 11h2v6H1v-6zm2 6h2v2H3v-2zm11-4h-4v-2H8V9H6V7H4v2h2v2h2v2h2v4h4v-4z", fill: "currentColor" })));
};
exports.SpeedSlow = SpeedSlow;
exports.SpeedSlow.displayName = 'SpeedSlow';
