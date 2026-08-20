sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/syncStyleClass"
],
  function (Controller, syncStyleClass) {
    "use strict";

    return Controller.extend("djp.training.exc.controller.Overview", {

      onSave: function () {
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "djp.training.exc.view.Dialog"
          }).then(function (oDialog) {
            syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
            return oDialog;
          }.bind(this));
        }
        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
      },

      onCloseDialog: function () {
        this.byId("dialog").close();
      }

    });
  });