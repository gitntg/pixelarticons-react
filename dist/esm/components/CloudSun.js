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
export const CloudSun = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M11 0h2v4h-2V0Zm1 12H8v2H4v2H2v4h2v2h10v-2h2v-4h-2v-2h-2v-2Zm0 2v2h2v4H4v-4h4v2h2v-2H8v-2h4ZM8 6h6v2H8V6Zm0 2v2H6V8h2Zm8 2h-2V8h2v2Zm0 0h2v2h-2v-2Zm4-8h2v2h-2V2Zm0 2v2h-2V4h2ZM2 2h2v2H2V2Zm2 2h2v2H4V4Zm20 7h-4v2h4v-2Z" })));
};
CloudSun.displayName = 'CloudSun';
//# sourceMappingURL=CloudSun.js.map