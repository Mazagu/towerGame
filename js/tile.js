function tile(cols, rows, width, height, board)
{
	var self = this;
	self.width = width / cols;
	self.height = height / rows;
	self.textures = ["grass1", "grass2", "grass3", "grass4", "grass5", "lgrass1", "lgrass2", "lgrass3", "lgrass4", "lgrass5"]
	self.container = null;
	self.content = null;

	self.draw = function() {
		self.container = document.createElement("div");
		self.container.classList.add("tile");
		self.container.classList.add(self.textures[parseInt(Math.random() * self.textures.length)]);
		self.container.style.width = self.width + "px";
		self.container.style.height = self.height + "px";

		self.container.addEventListener("click", function() {
			if(!self.content) {
				self.addWizard();
			} else {
				self.removeWizard();
			}
		});
		return self.container;
	}

	self.addWizard = function() {
		if(board.wizards < board.maxWizards) {
			self.addContent(new wizard());
			board.wizards ++;
		}			
	}

	self.removeWizard = function() {
		if(self.content.name == "wizard") {
			self.removeContent();
			board.wizards --;
		}			
	}

	self.addContent = function(content) {
		self.content = content;
		self.container.appendChild(self.content.draw());
	}

	self.removeContent = function() {
		self.container.innerHTML = null;
		self.content = null;
	}
}