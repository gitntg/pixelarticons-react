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
export const Movie = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M3 3h18v18H3V3zm2 2v2h2V5H5zm4 0v6h6V5H9zm8 0v2h2V5h-2zm2 4h-2v2h2V9zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm-4 2v-6H9v6h6zm-8 0v-2H5v2h2zm-2-4h2v-2H5v2zm0-4h2V9H5v2z", fill: "currentColor" })));
};
Movie.displayName = 'Movie';
