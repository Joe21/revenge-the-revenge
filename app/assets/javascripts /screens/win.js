game.WinScreen = me.ScreenObject.extend({
	// Constructor
	init: function() {
		this.parent(true);

		// Title Screen Image
		this.title = null;
		this.font = null;
		this.scrollerfont = null;
		this.scrollertween = null;

		this.scroller = 'YOU WIN   		';
		this.scrollpos = 600;
	},

	onResetEvent: function() {
		// If null, initialize the variables
		if(this.title == null) {
			// Initialize background image
			this.title = me.loader.getImage('Time_Warp');

			// Initialize font
			this.font = new me.BitmapFont('32x32_font', 32);

			// Set the Scroller
			this.scrollerfont = new me.BitmapFont('32x32_font', 32);
		}

		// Save User Score
		saveScore(game.data.score);

		// Reset to Default
		this.scrollerpos = 640;

		// Tween to Animate Arrow
    	this.scrollertween = new me.Tween(this).to({
        	scrollerpos: -850
    	}, 10000).onComplete(this.scrollover.bind(this)).start();

		// Enable the Keyboard
		me.input.bindKey(me.input.KEY.ENTER, 'enter', true);

		// Sound Effect
		// me.audio.play('cling');
	},

	// Tween Callback Function
	scrollover: function() {
		// Reset to Default
		this.scrollerpos = 640;
		this.scrollertween.to({
			scrollerpos: -2200
		},10000).onComplete(this.scrollover.bind(this)).start();
	},

	update: function() {
		// If pressed
		if(me.input.isKeyPressed('enter')) {
			me.state.change(me.state.MENU);
		}
		return true;
	},

	draw: function(context) {
		context.drawImage(this.title, 0, 0);

		this.font.draw(context, "CONGRATULATIONS!", 100, 150);
		this.font.draw(context, "YOU WON!", 170, 200);
		this.font.draw(context, "SCORE: " + game.data.score, 140, 280);
		this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
	},

	onDestroyEvent: function() {
		// Unbind the key
		me.input.unbindKey(me.input.KEY.ENTER);

		// Just in Case
		this.scrollertween.stop();
	}
});