"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _index = require("../index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("can transformAndWriteToFile", function () {
  var smallMarkdownBody = "# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n";

  return (0, _index2.default)({
    frontmatterMarkdown: {
      frontmatter: [{ key: "content" }, { anotherKey: ["arrayValue1", "arrayValue2"] }, { anObject: { whatever: true, wuk: new Error('something') } }],
      body: smallMarkdownBody
    },
    path: _path2.default.join(__dirname, "snapshots"),
    fileName: "test.md"
  });
});