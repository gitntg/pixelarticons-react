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
exports.LayoutDistributeVertical = void 0;
const react_1 = __importDefault(require("react"));
const LayoutDistributeVertical = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { d: "M20 6V4H4v2h16zm0 14v-2H4v2h16zM17 8v8h-2V8h2zm-8 6v-4h6V8H7v8h8v-2H9z", fill: "currentColor" })));
};
exports.LayoutDistributeVertical = LayoutDistributeVertical;
exports.LayoutDistributeVertical.displayName = 'LayoutDistributeVertical';
//# sourceMappingURL=LayoutDistributeVertical.js.map