sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/syncStyleClass",
  "sap/ui/model/json/JSONModel"
],
  function (Controller, syncStyleClass, JSONModel) {
    "use strict";

    return Controller.extend("djp.training.exc.controller.Overview", {

      onInit: function () {
        var oModel = new JSONModel();
        this.getView().setModel(oModel, "customer");
      },

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
      },

      onCustomerChange: function (oEvent) {
        var oBindingContext = oEvent.getParameter("listItem").getBindingContext();
        this.byId("bookingTable").setBindingContext(oBindingContext);
      }

    });
  });