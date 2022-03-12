/*global QUnit*/

sap.ui.define([
	"comnttdatasaptraining2022ntt04ca/appntt04dm01/controller/App_demo_NTT04_1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("App_demo_NTT04_1 Controller");

	QUnit.test("I should test the App_demo_NTT04_1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
