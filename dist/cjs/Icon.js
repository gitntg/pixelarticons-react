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
exports.Icon = Icon;
const react_1 = __importDefault(require("react"));
const icons_1 = require("./icons");
function Icon(_a) {
    var { name, size = 24, className = "" } = _a, props = __rest(_a, ["name", "size", "className"]);
    // Try to find the icon by name
    let iconName = name;
    // Check if the name is in original names map (converts "4g" to "Icon4g")
    if (icons_1.originalToComponent[name]) {
        iconName = icons_1.originalToComponent[name];
    }
    const IconComponent = icons_1.IconMap[iconName];
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }
    return react_1.default.createElement(IconComponent, Object.assign({ size: size, className: className }, props));
}
Icon.displayName = 'Icon';
