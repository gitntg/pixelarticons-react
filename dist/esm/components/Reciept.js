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
export const Reciept = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M3 2h2v2h2v2H5v14h14V6h-2V4h2V2h2v20H3V2zm12 2V2h2v2h-2zm-2 0h2v2h-2V4zm-2 0V2h2v2h-2zM9 4h2v2H9V4zm0 0V2H7v2h2zm8 4H7v2h10V8zM7 12h10v2H7v-2zm10 6v-2h-4v2h4z", fill: "currentColor" })));
};
Reciept.displayName = 'Reciept';
