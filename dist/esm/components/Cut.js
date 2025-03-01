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
export const Cut = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M2 2h2v2H2V2zm4 4H4V4h2v2zm2 2H6V6h2v2zm2 2V8H8v2h2zm4 0h-4v4H2v8h8v-8h4v8h8v-8h-8v-4zm2-2v2h-2V8h2zm2-2v2h-2V6h2zm2-2h-2v2h2V4zm0 0V2h2v2h-2zM4 20v-4h4v4H4zm12 0v-4h4v4h-4z", fill: "currentColor" })));
};
Cut.displayName = 'Cut';
