sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"meta/training/example/model/Todo",
], function(Controller, Todo) {

	return Controller.extend("meta.training.example.controller.App", {
		onInit: function(){
			this.getView().setModel(new Todo(), "TodoModel");
		},

		onAddTodo: function() {
			var oData = this.getView().getModel("TodoModel").getData();
			oData.push({todo: "", completed: false});
			this.getView().getModel("TodoModel").setData(oData);
		}
	});
});