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
export const FlipToBack = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M9 3H7v2h2V3zm0 12H7v2h2v-2zm2-12h2v2h-2V3zm2 12h-2v2h2v-2zm2-12h2v2h-2V3zm2 12h-2v2h2v-2zm2-12h2v2h-2V3zm2 4h-2v2h2V7zM7 7h2v2H7V7zm14 4h-2v2h2v-2zM7 11h2v2H7v-2zm14 4h-2v2h2v-2zM3 7h2v12h12v2H3V7z", fill: "currentColor" })));
};
FlipToBack.displayName = 'FlipToBack';
