"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ThemeToggle = function () {
    var t = localStorage.getItem("theme");
    var _a = react_1.useState(t), theme = _a[0], setTheme = _a[1];
    react_1.useEffect(function () {
        if (t) {
            setTheme(t);
            console.log("rrrr");
        }
    }, [t]);
    var toggleTheme = function () {
        var currentTheme = localStorage.getItem("theme");
        console.log(currentTheme);
        if (!currentTheme) {
            return localStorage.setItem("theme", "light");
        }
        else {
            var newTheme = currentTheme === "light" ? "dark" : "light";
            setTheme(newTheme);
            if (typeof window !== "undefined") {
                document.documentElement.setAttribute("data-theme", newTheme);
                document.body.className = newTheme;
            }
            localStorage.setItem("theme", newTheme);
        }
    };
    return (react_1["default"].createElement("button", { className: "px-2 py-2 rounded bg-primary mr-6 " + (theme === "light" ? "text-white" : "text-black"), onClick: toggleTheme }, theme === "light" ? "Dark Mode" : "Light Mode"));
};
exports["default"] = ThemeToggle;
