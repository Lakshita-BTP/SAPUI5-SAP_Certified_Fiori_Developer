sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox"
],
  function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("djp.training.exc.controller.App", {

      onSayHello: function () {
        MessageBox.information("Hello World");
      }

    });
  });