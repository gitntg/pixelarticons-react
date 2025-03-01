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
export const AbTesting = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M3 3h6v2H5v2h4v2H5v2h4v2H3V3zm6 8h2V9H9v2zm0-4h2V5H9v2zm4 4h8v10h-2v-4h-4v4h-2V11zm2 4h4v-2h-4v2zm0-12h6v6h-2V5h-4V3zM3 15h2v4h4v2H3v-6z", fill: "currentColor" })));
};
AbTesting.displayName = 'AbTesting';
