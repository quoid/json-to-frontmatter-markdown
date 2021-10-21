'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDirectories(path) {
  return new Promise(function (resolve, reject) {
    return (0, _mkdirp2.default)(path, function (err) {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve();
    });
  });
}

function writeToFile(_ref) {
  var content = _ref.content,
      path = _ref.path,
      fileName = _ref.fileName;

  var doWriteToFile = function doWriteToFile() {
    return new Promise(function (resolve, reject) {
      _fs2.default.writeFile(path + '/' + fileName, content, function (err) {
        if (err) {
          console.log(err);
          return reject(err);
        }
        console.log('The file was saved on location: ' + path + ' with name: ' + fileName);
        return resolve();
      });
    });
  };

  return createDirectories(path).then(doWriteToFile);
}

exports.default = writeToFile;