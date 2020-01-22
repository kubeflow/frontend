"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = {
    error: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // tslint:disable-next-line:no-console
        console.error.apply(console, args);
    },
    verbose: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // tslint:disable-next-line:no-console
        console.log.apply(console, args);
    },
};
function formatDateString(date) {
    if (typeof date === 'string') {
        return new Date(date).toLocaleString();
    }
    else {
        return date ? date.toLocaleString() : '-';
    }
}
exports.formatDateString = formatDateString;
/** Title cases a string by capitalizing the first letter of each word. */
function titleCase(str) {
    return str.split(/[\s_-]/)
        .map(function (w) { return "" + w.charAt(0).toUpperCase() + w.slice(1); })
        .join(' ');
}
exports.titleCase = titleCase;
//# sourceMappingURL=Utils.js.map