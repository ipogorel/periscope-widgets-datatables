"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gridDt = require("./grid-dt");

Object.keys(_gridDt).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gridDt[key];
    }
  });
});
exports.configure = configure;

require("./periscope-widgets-datatables.css!");

function configure(aurelia) {
  aurelia.globalResources("./grid-dt");
}