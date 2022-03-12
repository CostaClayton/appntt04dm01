/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["com/nttdata/sap/training2022/ntt04/ca/appntt04dm01/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
