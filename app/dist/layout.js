"use client";
"use strict";
exports.__esModule = true;
var local_1 = require("next/font/local");
require("./globals.css");
var Header_1 = require("@/components/Header");
var store_1 = require("@/lib/store");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
var geistSans = local_1["default"]({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900"
});
var geistMono = local_1["default"]({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900"
});
function RootLayout(_a) {
    var children = _a.children;
    var _b = react_1.useState(localStorage.getItem("theme")), theme = _b[0], setTheme = _b[1];
    react_1.useEffect(function () {
        var savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.className = savedTheme;
        }
    }, []);
    return (React.createElement("html", { lang: 'en', "data-theme": theme },
        React.createElement("body", { className: geistSans.variable + " " + geistMono.variable + " antialiased" },
            React.createElement(Header_1["default"], { theme: theme, setTheme: setTheme }),
            React.createElement("div", { className: ' mx-40' },
                React.createElement(react_redux_1.Provider, { store: store_1.store }, children)))));
}
exports["default"] = RootLayout;
