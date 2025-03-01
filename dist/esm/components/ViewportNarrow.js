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
export const ViewportNarrow = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M10 2H8v4h2V4h4v2h2V2h-6zM8 20v-2h2v2h4v-2h2v4H8v-2zm9-9h5v2h-5v2h-2v-2h-2v-2h2V9h2v2zm0-2V7h2v2h-2zm0 6h2v2h-2v-2zM2 11h5V9h2v2h2v2H9v2H7v-2H2v-2zm5 4v2H5v-2h2zm0-6V7H5v2h2z", fill: "currentColor" })));
};
ViewportNarrow.displayName = 'ViewportNarrow';
