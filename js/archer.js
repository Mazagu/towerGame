function archer(board)
{
	character.call(this, board);
	var self = this;
	self.name = "archer";
	self.speed = 15;

	document.addEventListener("keypress", function(e) {
		if(e.key == KEY_UP) {
			self.nextMove = "up";
		}

		if(e.key == KEY_RIGHT) {
			self.nextMove = "right";
		}

		if(e.key == KEY_DOWN) {
			self.nextMove = "down";
		}

		if(e.key == KEY_LEFT) {
			self.nextMove = "left";
		}
	});

	document.addEventListener("keyup", function(e) {
		self.nextMove = null;
	});

	self.update = function() {
		self.checkMoves();

		if(self.nextMove && self.availableMoves.indexOf(self.nextMove) == -1) {
			self.nextMove = null;
		}

		if(self.nextMove) {
			self.move();
		}
	}
}