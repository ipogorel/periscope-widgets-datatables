'use strict';

System.register(['./periscope-widgets-datatables.css!', './grid-dt', 'periscope-framework'], function (_export, _context) {
  var PeriscopeFactory, GridDT;
  return {
    setters: [function (_periscopeWidgetsDatatablesCss) {}, function (_gridDt) {
      GridDT = _gridDt.GridDT;
      var _exportObj = {};

      for (var _key in _gridDt) {
        if (_key !== "default") _exportObj[_key] = _gridDt[_key];
      }

      _export(_exportObj);
    }, function (_periscopeFramework) {
      PeriscopeFactory = _periscopeFramework.PeriscopeFactory;
    }],
    execute: function () {
      function configure(aurelia) {
        var pf = aurelia.container.get(PeriscopeFactory);
        pf.addReference(GridDT);
        aurelia.globalResources("./grid-dt");
      }

      _export('configure', configure);
    }
  };
});