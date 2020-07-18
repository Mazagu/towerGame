function app()
{
	var self = this;
	var scoreHeight = parseInt(getComputedStyle(document.getElementById("score-container")).height);
	var size = (window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight) - scoreHeight;
	size = parseInt(size.toString().replace(/.$/, 0));
	document.getElementById("score-container").style.width = size + "px";
	self.width = size;
	self.height = size;
	self.frameRate = 30;
	self.loop = null;
	self.container = document.querySelector("#game");
	self.timer = 0;
	self.score = 0;

	self.start = function() {
		self.timer = 0;
		self.score = 0;
		self.container.style.width = self.width + "px";
		self.container.style.height = self.height + "px";
		self.board = new board(self.width, self.height, self);
		self.board.draw();
	}

	self.run = function() {
		self.loop = setInterval(function() {
			self.update();
		},1000 / self.frameRate);
	}

	self.stop = function() {
		clearInterval(self.loop);
	}

	self.update = function() {
		self.timer ++;
		self.board.update();
		document.getElementById("score").innerHTML = self.score;
	}
}