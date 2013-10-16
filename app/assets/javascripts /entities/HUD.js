// Set the HUD
game.HUD = game.HUD || {};

// Create Our HUD Container
game.HUD.Container = me.ObjectContainer.extend({

	init: function() {
		// call the constructor
		this.parent();
		
		// persistent across level change
		this.isPersistent = true;
		
		// non collidable
		this.collidable = false;
		
		// make sure our object is always draw first
		this.z = Infinity;

		// give a name
		this.name = "HUD";
		
		// add our child score object at the top left corner
		this.addChild(new game.HUD.ScoreItem(580, 410));
	}
});


// Score HUD Item
game.HUD.ScoreItem = me.Renderable.extend({	
	// Constructor
	init: function(x, y) {
		
		// Constructor
		this.parent(new me.Vector2d(x, y), 10, 10); 
		
		// Create Font
		this.font = new me.BitmapFont("32x32_font", {x:32});
		this.font.alignText = "bottom";
		this.font.set("right", 1.6);

		// Local Copy of Global Score
		this.score = -1;

		// Use Screen Coordinates
		this.floating = true;
	},
	
	// Make Sure Score is Updated
	update : function () {
		// we don't draw anything fancy here, so just
		// return true if the score has been updated
		if (this.score !== me.game.score) {	
			this.score = me.game.score;
			return true;
		}
		return false;
	},

	// Draw Score onto the HUD
	draw : function (context) {
		this.font.draw (context, game.data.score, this.pos.x, this.pos.y);
	}

});
