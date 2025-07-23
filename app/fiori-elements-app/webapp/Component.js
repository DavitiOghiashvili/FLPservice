sap.ui.require(['sap/ui/core/Lib'], (Lib) => {
    Lib.load({ name: 'reuse/library', url: 'https://011aeafftrial.launchpad.cfapps.us10.hana.ondemand.com/ae3fbb4f-a5d3-430d-8718-af4946f6be67.reuselibrary.reuselibrary-1.0.0' })
})

sap.ui.define(
    ["sap/fe/core/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("fiorielementsapp.Component", {
            metadata: {
                manifest: "json"
            }
        });
    }
);