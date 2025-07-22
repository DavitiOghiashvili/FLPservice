sap.ui.require(['sap/ui/core/Lib'], (Lib) => {
    Lib.load({ name: 'reuse/library', url: 'https://011aeafftrial.launchpad.cfapps.us10.hana.ondemand.com/ae3fbb4f-a5d3-430d-8718-af4946f6be67.reuselibrary.reuselibrary-1.0.0' })
})

sap.ui.define(
  ['sap/ui/core/UIComponent', 'freestylesapui5app/model/models'],
  (UIComponent, models) => {
    'use strict';

    return UIComponent.extend('freestylesapui5app.Component', {
      metadata: {
        manifest: 'json',
        interfaces: ['sap.ui.core.IAsyncContentCreation'],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        this.setModel(models.createDeviceModel(), 'device');

        // enable routing
        this.getRouter().initialize();
      },
    });
  },
);
