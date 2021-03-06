sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/Filter',
		'sap/ui/model/json/JSONModel'
	], function(Controller, Filter, JSONModel) {
	"use strict";

	var IconTabBarController = Controller.extend("sap.m.sample.IconTabBarBackgroundDesign.IconTabBarBackgroundDesign", {

		onInit: function () {

			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"));
			this.getView().setModel(oModel);

			// reuse table sample component
			var oComp = sap.ui.getCore().createComponent({
				name : 'sap.m.sample.Table'
			});
			oComp.setModel(this.getView().getModel());
			this._oTable = oComp.getTable();
			this.byId("idIconTabBar").insertContent(this._oTable);

			// update table
			this._oTable.setHeaderText(null);
			this._oTable.setShowSeparators("Inner");
		},

		handleIconTabBarSelect: function (oEvent) {
			var oBinding = this._oTable.getBinding("items"),
				sKey = oEvent.getParameter("key"),
				oFilter;
			if (sKey === "Ok") {
				oFilter = new Filter("WeightMeasure", "LE", 1000);
				oBinding.filter([oFilter]);
			} else if (sKey === "Heavy") {
				oFilter = new Filter("WeightMeasure", "BT", 1001, 2000);
				oBinding.filter([oFilter]);
			} else if (sKey === "Overweight") {
				oFilter = new Filter("WeightMeasure", "GT", 2000);
				oBinding.filter([oFilter]);
			} else {
				oBinding.filter([]);
			}
		},

		onBackgroundDesignSelect: function (oEvent) {
			var oIconTabBar = this.byId("idIconTabBar");
			var sSelectedValue = oEvent.getSource().getSelectedButton().getText();
			oIconTabBar.setBackgroundDesign(sSelectedValue);
		},

		onHeaderBackgroundDesignSelect: function (oEvent) {
			var oIconTabBar = this.byId("idIconTabBar");
			var sSelectedValue = oEvent.getSource().getSelectedButton().getText();
			oIconTabBar.setHeaderBackgroundDesign(sSelectedValue);
		}
	});


	return IconTabBarController;

});