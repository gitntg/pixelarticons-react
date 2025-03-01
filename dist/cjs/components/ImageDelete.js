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
exports.ImageDelete = void 0;
const react_1 = __importDefault(require("react"));
const ImageDelete = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { d: "M14 3H2v18h20V11h-2v8H4V5h10V3zM6 7h2v2H6V7zm14-2h-2V3h-2v2h2v2h-2v2h2V7h2v2h2V7h-2V5zm0 0V3h2v2h-2zm-8 4h2v2h-2V9zm-2 4v-2h2v2h-2zm-2 2h2v-2H8v2zm0 0v2H6v-2h2zm8-2h-2v-2h2v2zm0 0h2v2h-2v-2z", fill: "currentColor" })));
};
exports.ImageDelete = ImageDelete;
exports.ImageDelete.displayName = 'ImageDelete';
