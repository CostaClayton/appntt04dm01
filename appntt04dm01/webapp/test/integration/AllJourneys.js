sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "com.nttdata.sap.training2022.ntt04.ca.appntt04dm01.view.",
		autoWait: true
	});
});
