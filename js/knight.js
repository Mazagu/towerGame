function knight(board)
{
	var self = this;
	self.name = "knight";
	self.direction = {
		x: 0,
		y: 1
	};
	self.next = null;
	self.speed = 30;
	
	self.draw = function() {
		var container = document.createElement("div");
		container.classList.add("knight");
		return container;
	}

	self.checkDirection = function(x, y) {
		if(x + self.direction.x < 0 || y + self.direction.y < 0 || x + self.direction.x >= board.cols || y + self.direction.y >= board.rows ||
		   (board.tiles[x + self.direction.x][y + self.direction.y].content && board.tiles[x + self.direction.x][y + self.direction.y].content.name == "wizard")
		  ) {
			if(self.direction.x != 0) {
				self.direction.x = 0;
			} else {
				self.direction.x = Math.random() < 0.5 ? -1 : 1;
			}

			if(self.direction.y != 0) {
				self.direction.y = 0;
			} else {
				self.direction.y = Math.random() < 0.5 ? -1 : 1;
			}
			self.checkDirection(x,y);
		}
	}

	self.setNext = function(x, y) {
		self.next = {
			x: x + self.direction.x,
			y: y + self.direction.y
		}
	}
}