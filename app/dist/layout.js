"use client";
"use strict";
exports.__esModule = true;
var local_1 = require("next/font/local");
require("./globals.css");
var Header_1 = require("@/components/Header");
var store_1 = require("@/lib/store");
var react_redux_1 = require("react-redux");
var ProviderTheme_1 = require("@/components/ProviderTheme");
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
    return (React.createElement("html", { lang: 'en' },
        React.createElement("body", { className: geistSans.variable + " " + geistMono.variable + " antialiased" },
            React.createElement(ProviderTheme_1["default"], null,
                React.createElement(Header_1["default"], null),
                React.createElement("div", { className: 'mx-40' },
                    React.createElement(react_redux_1.Provider, { store: store_1.store }, children))))));
}
exports["default"] = RootLayout;
