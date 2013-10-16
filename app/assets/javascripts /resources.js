game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	 // area01 tileset
	{name: "build_atlas",  type:"image", src: "/assets/map/build_atlas.png"},

	// meta tileset
	{name: "metatiles32x32",  type:"image", src: "/assets/map/metatiles32x32.png"},
    // the main player spritesheet
    {name: "gripe_run_right",     type:"image", src: "/assets/sprite/gripe_run_right.png"},
    // the parallax background
    {name: "great_wall_2",  type:"image", src: "/assets/great_wall_2.png"},
    // Title Screen Background
    {name: "title_screen",         type:"image", src: "/assets/gui/title_screen.png"},
    // the spinning coin spritesheet
    {name: "spinning_coin_gold",  type:"image", src: "/assets/sprite/spinning_coin_gold.png"},
    // our enemty entity
    {name: "dragonenemy",      type:"image", src: "/assets/sprite/dragonenemy.png"},
    // game font
    {name: "32x32_font",    type:"image", src: "/assets/font/32x32_font.png"},
    // Bullet Sprite
    {name: "bullet",    type:"image", src: "/assets/sprite/bullet.png"},
	
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
 	{name: "someword", type: "tmx", src: "/assets/map/someword.tmx"},
 	

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	
	// {name: "dst-inertexponent", type: "audio", src: "/public/audios/dst-inertexponent.mp3", channel : 1},

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */
	// {name: "cling", type: "audio", src: "/public/audios/cling.mp3", channel : 2},
 //    {name: "stomp", type: "audio", src: "/public/audios/stomp.mp3", channel : 1},
 //    {name: "jump",  type: "audio", src: "/public/audios/jump.mp3", channel : 1}
];
