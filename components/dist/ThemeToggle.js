"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ThemeToggle = function (_a) {
    var theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };
    return (react_1["default"].createElement("button", { className: "px-2 py-2 rounded bg-primary mr-6 " + (theme === "light" ? "text-white" : "text-black"), onClick: toggleTheme }, theme === "light" ? "Dark Mode" : "Light Mode"));
};
exports["default"] = ThemeToggle;
