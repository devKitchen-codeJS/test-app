'use client';
"use strict";
exports.__esModule = true;
var PostGrid_1 = require("@/components/PostGrid");
var postsApi_1 = require("@/lib/services/postsApi");
function Home() {
    var _a = postsApi_1.useGetAllPostsQuery(), data = _a.data, error = _a.error, isLoading = _a.isLoading;
    if (error) {
        return (React.createElement("div", { className: "p-4 border border-red-300 rounded-lg bg-red-50" },
            React.createElement("h2", { className: "text-xl font-bold text-red-600" }, "Error"),
            React.createElement("p", { className: "text-red-800" }, "Failed to load posts. Please try again later.")));
    }
    if (isLoading) {
        return React.createElement("div", null, "Loading...");
    }
    if (!data || data.length === 0) {
        return (React.createElement("div", { className: "p-4 border border-gray-300 rounded-lg" },
            React.createElement("h2", { className: "text-xl font-bold" }, "No posts available.")));
    }
    return (React.createElement("div", null,
        React.createElement(PostGrid_1["default"], { posts: data })));
}
exports["default"] = Home;
