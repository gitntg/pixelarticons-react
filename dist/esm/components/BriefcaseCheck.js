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
export const BriefcaseCheck = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M16 3H8v4H2v14h20V7h-6V3zm-2 4h-4V5h4v2zM4 19V9h16v10H4zm10-8h2v2h-2v-2zm-2 4v-2h2v2h-2zm-2 0h2v2h-2v-2zm0 0H8v-2h2v2z", fill: "currentColor" })));
};
BriefcaseCheck.displayName = 'BriefcaseCheck';
//# sourceMappingURL=BriefcaseCheck.js.map