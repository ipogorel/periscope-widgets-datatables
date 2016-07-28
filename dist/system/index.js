"use strict";

System.register(["./periscope-widgets-datatables.css!", "./grid-dt"], function (_export, _context) {
  return {
    setters: [function (_periscopeWidgetsDatatablesCss) {}, function (_gridDt) {
      var _exportObj = {};

      for (var _key in _gridDt) {
        if (_key !== "default") _exportObj[_key] = _gridDt[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {
      function configure(aurelia) {
        aurelia.globalResources("./grid-dt");
      }

      _export("configure", configure);
    }
  };
});