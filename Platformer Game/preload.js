var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.game.load.image('tile', 'tile.png');
		this.game.load.image('box', 'box.png');
		
		this.game.load.spritesheet('player', 'player.png', 24, 24, 9, -2);
		

	},

	create: function(){
		this.game.state.start("Main");
	}
}