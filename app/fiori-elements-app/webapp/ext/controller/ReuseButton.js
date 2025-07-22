sap.ui.define(["reuse/library/ReuseButton"], function (ReuseButton) {
    'use strict';
    return {
        onReuseButtonClick: function () {
            const oReuseButton = new ReuseButton({
            });

            oReuseButton.onclick();
        }
    };
});