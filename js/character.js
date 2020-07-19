function character(board)
{
	var self = this;
	self.name = "character";
	self.position = { x: null, y: null };
	self.nextPosition = { x: null, y: null };
	self.direction =  { x: 0, y: 0 };
	self.moves = ["up","right","down","left"];
	self.availableMoves = [];
	self.nextMove = null;
	self.speed = 30;
	
	self.draw = function(x, y) {
		self.setPosition(x, y);
		self.setNextPosition(x, y);
		var container = document.createElement("div");
		container.classList.add(self.name);
		return container;
	}

	self.update = function() {
		self.checkMoves();

		if(self.nextMove && self.availableMoves.indexOf(self.nextMove) == -1) {
			self.nextMove = null;
		}

		if(!self.nextMove && self.availableMoves.length > 0) {
			self.moveRandom();
		}

		if(self.nextMove) {
			self.move();
		}
	}

	self.moveRandom = function() {
		self.nextMove = self.availableMoves[parseInt(Math.random() * self.availableMoves.length)];
	}

	self.move = function() {
		self[self.nextMove]();
		self.setNextPosition();
		board.tiles[self.position.y][self.position.x].removeContent();
		board.tiles[self.nextPosition.y][self.nextPosition.x].addContent(self);
		self.setDirection(0,0);
	}

	self.getPosition = function() {
		return self.position;
	}

	self.setPosition = function(x,y) {
		self.position.x = x;
		self.position.y = y;
	}

	self.getDirection = function() {
		return self.direction;
	}

	self.up = function() {
		if(self.checkUp()) {
			self.setDirection(0,-1);
			return true;
		} else {
			return false;
		}
	}

	self.checkUp = function() {
		return self.position.y > 0 && self.checkTarget(0,-1);
	}

	self.right = function() {
		if(self.checkRight()) {
			self.setDirection(1,0);
			return true;
		} else {
			return false;
		}
	}

	self.checkRight = function() {
		return self.position.x < board.cols - 1 && self.checkTarget(1,0);
	}

	self.down = function() {
		if(self.checkDown()) {
			self.setDirection(0,1);
			return true;
		} else {
			return false;
		}
	}

	self.checkDown = function() {
		return self.position.y < board.rows - 1 && self.checkTarget(0,1);
	}

	self.left = function() {
		if(self.checkLeft()) {
			self.setDirection(-1,0);
			return true;
		} else {
			return false;
		}
	}

	self.checkLeft = function() {
		return self.position.x > 0 && self.checkTarget(-1, 0);
	}

	self.setDirection = function(x,y) {
		self.direction.x = x;
		self.direction.y = y;
	}

	self.getNextPosition = function() {
		return self.nextPosition;
	}

	self.setNextPosition = function(x,y) {
		self.nextPosition.x = self.position.x + self.direction.x;
		self.nextPosition.y = self.position.y + self.direction.y;
	}

	self.checkTarget = function(x,y) {
		return !board.tiles[self.position.y + y][self.position.x + x].content;
	}

	self.checkMoves = function() {
		var output = [];
		self.moves.forEach(function(move) {
			if(self.check(move)) {
				output.push(move);
			}
		});
		self.availableMoves = output;
	}

	self.check = function(move) {
		switch(move) {
			case "up":
				return self.checkUp();
			break;
			case "right":
				return self.checkRight();
			break;
			case "down":
				return self.checkDown();
			break;
			case "left":
				return self.checkLeft();
			break;
			default:
				return false;
		}
	}
}