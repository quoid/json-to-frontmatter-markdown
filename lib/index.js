'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transformToMarkdownString = require('./transformToMarkdownString');

var _transformToMarkdownString2 = _interopRequireDefault(_transformToMarkdownString);

var _writeToFile = require('./writeToFile');

var _writeToFile2 = _interopRequireDefault(_writeToFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformAndWriteToFile(_ref) {
  var frontmatterMarkdown = _ref.frontmatterMarkdown,
      path = _ref.path,
      fileName = _ref.fileName;

  var transformedMarkdown = (0, _transformToMarkdownString2.default)(frontmatterMarkdown);
  return (0, _writeToFile2.default)({ content: transformedMarkdown, path: path, fileName: fileName });
}
exports.default = transformAndWriteToFile;