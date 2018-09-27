sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function(JSONModel) {
	return JSONModel.extend("meta.training.example.model.Todo", {
		constructor: function(){
			JSONModel.apply(this, [
				[
					{"todo": "Test1", "completed": false},
					{"todo": "Test2", "completed": true},
					{"todo": "Test3", "completed": false}
				]
			]);
		}
	});
})
