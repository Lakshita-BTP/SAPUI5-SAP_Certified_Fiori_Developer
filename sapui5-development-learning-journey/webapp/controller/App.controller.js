sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  function (Controller) {
    "use strict";

    return Controller.extend("djp.training.exc.controller.App", {

      onInit: function () {
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      }

    });
  });