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
exports.MessageClock = void 0;
const react_1 = __importDefault(require("react"));
const MessageClock = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { d: "M20 2H2v20h2V4h16v4h2V2h-2zM8 16H6v2H4v2h2v-2h2v-2zm6-2h2v2h2v2h-4v-4zm6-4h-8v2h-2v8h2v2h8v-2h2v-8h-2v-2zm0 2v8h-8v-8h8z", fill: "currentColor" })));
};
exports.MessageClock = MessageClock;
exports.MessageClock.displayName = 'MessageClock';
//# sourceMappingURL=MessageClock.js.map