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
exports.CreditCardDelete = void 0;
const react_1 = __importDefault(require("react"));
const CreditCardDelete = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        react_1.default.createElement("path", { d: "M20 4H2v16h12v-2H4v-6h16V8H4V6h16V4zm0 0h2v8h-2V4zm2 14h-2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2z", fill: "currentColor" })));
};
exports.CreditCardDelete = CreditCardDelete;
exports.CreditCardDelete.displayName = 'CreditCardDelete';
//# sourceMappingURL=CreditCardDelete.js.map