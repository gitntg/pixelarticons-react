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
exports.Camera = void 0;
const react_1 = __importDefault(require("react"));
const Camera = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { d: "M9 3H7v2H2v16h20V5h-5V3H9zm8 4h3v12H4V7h5V5h6v2h2zm-7 2h4v2h-4V9zm4 6h-4v2h4v-2h2v-4h-2v4zm-6-4h2v4H8v-4z", fill: "currentColor" })));
};
exports.Camera = Camera;
exports.Camera.displayName = 'Camera';
//# sourceMappingURL=Camera.js.map