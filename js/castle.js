function castle()
{
	var self = this;
	self.name = "castle";
	
	self.draw = function() {
		var container = document.createElement("div");
		container.classList.add("castle");
		return container;
	}
}