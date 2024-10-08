"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ThemeToggle_1 = require("./ThemeToggle");
var Header = function (_a) {
    var theme = _a.theme, setTheme = _a.setTheme;
    return (react_1["default"].createElement("div", { className: ' w-full h-16 flex justify-center items-center relative ' },
        react_1["default"].createElement("span", null, "Test Task "),
        react_1["default"].createElement("div", { className: ' absolute right-0' },
            react_1["default"].createElement(ThemeToggle_1["default"], { theme: theme, setTheme: setTheme }))));
};
exports["default"] = Header;
