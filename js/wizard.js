function wizard()
{
	var self = this;
	self.name = "wizard";
	
	self.draw = function() {
		var container = document.createElement("div");
		container.classList.add("wizard");
		return container;
	}
}