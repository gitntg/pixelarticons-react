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
export const CalendarSortAscending = (_a) => {
    var { size = 24, className = "" } = _a, props = __rest(_a, ["size", "className"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", className: `${className}` }, props),
        React.createElement("path", { d: "M10 5H8v2H4V5H2v2H0v12h12V7h-2V5zM2 9h8v2H2V9zm0 8v-4h8v4H2zM20 7h-2v8h-2v-2h-2v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2V7z", fill: "currentColor" })));
};
CalendarSortAscending.displayName = 'CalendarSortAscending';
//# sourceMappingURL=CalendarSortAscending.js.map