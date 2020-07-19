function board(width, height, app)
{
	var self = this;
	self.parent = app;
	self.cols = 10;
	self.rows = 10;
	self.width = width;
	self.height = height;
	self.tiles = [];
	self.wizards = 0;
	self.maxWizards = 2;
	self.knight = new knight(self);
	self.archer = new archer(self);
	self.tower = null;

	self.draw = function() {
		for(var i = 0; i < self.cols; i++) {
			self.tiles[i] = [];
			for(var j = 0; j < self.cols; j++) {
				self.tiles[i][j] = new tile(i, j, self.cols, self.rows, width, height, self);
				app.container.appendChild(self.tiles[i][j].draw());
			}
		}
		self.tiles[parseInt(Math.random() * self.cols)][parseInt(Math.random() * self.rows)].addContent(self.knight);
		self.addRandomArcher();
		self.addRandomTower();
	}

	self.update = function() {
		if(app.timer % self.archer.speed == 0) {
			self.archer.update();				
		}

		if(app.timer % self.knight.speed == 0) {
			self.knight.update();				
		}
	}

	self.addRandomTower = function() {
		var x = parseInt(Math.random() * self.cols);
		var y = parseInt(Math.random() * self.rows);
		if(!self.tiles[x][y].content) {
			self.tiles[x][y].addContent(new tower(self));
		} else {
			self.addRandomTower();
		}
	}

	self.addRandomArcher = function() {
		var x = parseInt(Math.random() * self.cols);
		var y = parseInt(Math.random() * self.rows);
		if(!self.tiles[x][y].content) {
			self.tiles[x][y].addContent(self.archer);
		} else {
			self.addRandomTower();
		}
	}
}