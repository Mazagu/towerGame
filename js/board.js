function board(width, height, app)
{
	var self = this;
	self.cols = 10;
	self.rows = 10;
	self.width = width;
	self.height = height;
	self.tiles = [];
	self.wizards = 0;
	self.maxWizards = 2;
	self.knight = new knight(self);
	self.tower = null;

	self.draw = function() {
		for(var i = 0; i < self.cols; i++) {
			self.tiles[i] = [];
			for(var j = 0; j < self.cols; j++) {
				self.tiles[i][j] = new tile(self.cols, self.rows, width, height, self);
				app.container.appendChild(self.tiles[i][j].draw());
			}
		}
		self.tiles[parseInt(Math.random() * self.cols)][parseInt(Math.random() * self.rows)].addContent(self.knight);
		self.addRandomTower();
	}

	self.update = function() {
		for(var i = 0; i < self.cols; i++) {
			for(var j = 0; j < self.cols; j++) {
				if(self.tiles[i][j].content && self.tiles[i][j].content.name == "knight") {
					if(app.timer % self.knight.speed == 0) {
						self.knight.checkDirection(i,j);
						self.knight.setNext(i,j);
						self.tiles[i][j].removeContent();
					}
				}
			}
		}

		if(self.knight.next && !self.tiles[self.knight.next.x][self.knight.next.y].content) {
			self.tiles[self.knight.next.x][self.knight.next.y].addContent(self.knight);
		} else if(self.knight.next && self.tiles[self.knight.next.x][self.knight.next.y].content.name == "tower") {
			self.tiles[self.knight.next.x][self.knight.next.y].addContent(self.knight);
			self.addRandomTower();
			app.score++;
		}
	}

	self.addRandomTower = function() {
		var x = parseInt(Math.random() * self.cols);
		var y = parseInt(Math.random() * self.rows);
		if(!self.tiles[x][y].content) {
			self.tiles[x][y].addContent(new tower());
		} else {
			self.addRandomTower();
		}
	}
}