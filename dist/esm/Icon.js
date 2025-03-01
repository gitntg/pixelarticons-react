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
import React from 'react';
import { IconMap, originalToComponent } from './icons';
export function Icon(_a) {
    var { name, size = 24, className = "" } = _a, props = __rest(_a, ["name", "size", "className"]);
    // Try to find the icon by name
    let iconName = name;
    // Check if the name is in original names map (converts "4g" to "Icon4g")
    if (originalToComponent[name]) {
        iconName = originalToComponent[name];
    }
    const IconComponent = IconMap[iconName];
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }
    return React.createElement(IconComponent, Object.assign({ size: size, className: className }, props));
}
Icon.displayName = 'Icon';
