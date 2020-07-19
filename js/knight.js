function knight(board)
{
	character.call(this, board);
	var self = this;
	self.name = "knight";

	// Override default
	self.checkTarget = function(x,y) {
		return !board.tiles[self.position.y + y][self.position.x + x].content ||
				(
					board.tiles[self.position.y + y][self.position.x + x].content.name != "wizard" &&
					board.tiles[self.position.y + y][self.position.x + x].content.name != "archer"
				);
	}
}