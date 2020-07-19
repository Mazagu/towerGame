function tower(board)
{
	character.call(this, board);
	var self = this;
	self.name = "tower";

	self.death = function() {
		self.board.parent.score++;
		self.board.addRandomTower();
	}
}