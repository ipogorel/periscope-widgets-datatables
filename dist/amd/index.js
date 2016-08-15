define(['exports', './grid-dt', 'periscope-framework', './periscope-widgets-datatables.css!'], function (exports, _gridDt, _periscopeFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_gridDt).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _gridDt[key];
      }
    });
  });
  exports.configure = configure;
  function configure(aurelia) {
    var pf = aurelia.container.get(_periscopeFramework.PeriscopeFactory);
    pf.addReference(_gridDt.GridDT);
    aurelia.globalResources("./grid-dt");
  }
});