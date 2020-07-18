function tower()
{
	var self = this;
	self.name = "tower";

	self.draw = function() {
		var container = document.createElement("div");
		container.classList.add("tower");
		return container;
	}
}