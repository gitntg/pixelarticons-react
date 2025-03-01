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
exports.BuildingCommunity = void 0;
const react_1 = __importDefault(require("react"));
const BuildingCommunity = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { d: "M20 2h2v20H2v-8h2v6h4v-4h2v4h4v-6h2v6h4V4H10v2H8V2h12zm-8 10h2v2h-2v-2zm-2-2h2v2h-2v-2zm-2 0V8h2v2H8zm-2 2v-2h2v2H6zm0 0H4v2h2v-2zm10-6h2v2h-2V6zm-2 0h-2v2h2V6zm2 4h2v2h-2v-2z", fill: "currentColor" })));
};
exports.BuildingCommunity = BuildingCommunity;
exports.BuildingCommunity.displayName = 'BuildingCommunity';
