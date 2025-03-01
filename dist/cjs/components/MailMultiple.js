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
exports.MailMultiple = void 0;
const react_1 = __importDefault(require("react"));
const MailMultiple = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { d: "M24 2H4v16h20V2zM6 16V4h16v12H6zM2 7H0v15h19v-2H2V7zm8-1H8v2h2v2h2v2h4v-2h2V8h2V6h-2v2h-2v2h-4V8h-2V6z", fill: "currentColor" })));
};
exports.MailMultiple = MailMultiple;
exports.MailMultiple.displayName = 'MailMultiple';
