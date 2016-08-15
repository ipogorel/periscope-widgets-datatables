'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gridDt = require('./grid-dt');

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

require('./periscope-widgets-datatables.css!');

var _periscopeFramework = require('periscope-framework');

function configure(aurelia) {
  var pf = aurelia.container.get(_periscopeFramework.PeriscopeFactory);
  pf.addReference(_gridDt.GridDT);
  aurelia.globalResources("./grid-dt");
}