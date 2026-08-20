sap.ui.define(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
    "use strict";

    var oContainer = new ComponentContainer({
        id: "container",
        name: "djp.training.exc",
        manifest: true,
        async: true,
        settings: {
            id: "djp.training.exc"
        }
    });
    oContainer.placeAt("content");

});