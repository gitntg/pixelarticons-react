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
export const ContactPlus = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M2 3h22v11h-2V5H2v14h12v2H0V3h2zm8 4H6v4h4V7zm-6 6h8v4H4v-4zm16-6h-6v2h6V7zm-6 4h6v2h-6v-2zm3 4h-3v2h3v-2zm4 6v3h-2v-3h-3v-2h3v-3h2v3h3v2h-3z", fill: "currentColor" })));
};
ContactPlus.displayName = 'ContactPlus';
//# sourceMappingURL=ContactPlus.js.map