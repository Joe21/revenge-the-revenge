game.PlayScreen = me.ScreenObject.extend({
	// On State Change
	onResetEvent: function() {	
		// Play BG Music
		// me.audio.playTrack("DST-InertExponent");

		// Load Level 1
		me.levelDirector.loadLevel('someword')

		// Reset the Score
		game.data.score = 0;
		
		// Add HUD to Game World
		me.game.add(new game.HUD.Container());
	},
	
	
	// When Leaving Screen
	onDestroyEvent: function() {
		// remove the HUD from the game world
		// me.game.world.removeChild(me.game.world.getEntityByProp("name", "HUD")[0]);

		// Stop BG Music
		me.audio.stopTrack();
	}
});