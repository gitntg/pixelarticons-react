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
export const BriefcasePlus = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M8 3h8v4h6v4h-2V9H4v10h8v2H2V7h6V3zm2 4h4V5h-4v2zm7 14h2v-3h3v-2h-3v-3h-2v3h-3v2h3v3z", fill: "currentColor" })));
};
BriefcasePlus.displayName = 'BriefcasePlus';
//# sourceMappingURL=BriefcasePlus.js.map