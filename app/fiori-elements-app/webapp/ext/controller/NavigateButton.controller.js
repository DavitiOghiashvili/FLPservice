sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("fiorielementsapp.ext.controller.NavigateButton", {
    onNavigateToFreestyleApp: function () {
      const oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation");

      oCrossAppNav.toExternal({
        target: {
          semanticObject: "FreestyleApp",
          action: "display"
        },
      });
    }
  });
});
