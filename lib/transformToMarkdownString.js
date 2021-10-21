"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _leftPad = require("left-pad");

var _leftPad2 = _interopRequireDefault(_leftPad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newLineAndIndent(markdownString, depth) {
  if (depth === 0) {
    return markdownString + "\n";
  }

  return markdownString + "\n" + (0, _leftPad2.default)('', depth * 2);
}

function transformMarkdownKeyValueToString(key, value, markdownString) {
  var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  try {
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
      if (value instanceof Array) {
        var arrayString = "" + value.map(function (item) {
          return "\"" + item + "\"";
        });
        return "" + newLineAndIndent(markdownString, depth) + key + ": [" + arrayString + "]";
      } else if (value instanceof Error) {
        return markdownString;
      } else {
        return Object.entries(value).reduce(function (accString, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              entryKey = _ref2[0],
              entryValue = _ref2[1];

          return "" + transformMarkdownKeyValueToString(entryKey, entryValue, accString, depth + 1);
        }, "" + newLineAndIndent(markdownString, depth) + key + ":");
      }
    } else if (typeof value === "number") {
      return "" + newLineAndIndent(markdownString, depth) + key + ": " + value;
    } else {
      return "" + newLineAndIndent(markdownString, depth) + key + ": \"" + value + "\"";
    }
  } catch (err) {
    return "" + newLineAndIndent(markdownString, depth) + key + ": " + JSON.stringify(value);
  }
}

function transformToMarkdownString(frontmatterMarkdown) {
  var markdownString = "---";
  frontmatterMarkdown.frontmatter.forEach(function (frontmatterField) {
    return Object.entries(frontmatterField).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      markdownString = transformMarkdownKeyValueToString(key, value, markdownString);
    });
  });

  markdownString = markdownString + "\n---";
  try {
    markdownString = markdownString + "\n" + frontmatterMarkdown.body;
  } catch (e) {
    markdownString = markdownString + "\n" + JSON.stringify(frontmatterMarkdown.body);
  }
  // TODO implement the transform
  return markdownString;
}

exports.default = transformToMarkdownString;