/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comnttdatasaptraining2022ntt04ca/appntt04dm01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
