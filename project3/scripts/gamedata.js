const gameworld = {

	world1: [ 
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,3,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1],
		[1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,2,1,1],
		[1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1],
		[1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1],
		[1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1],
		[1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1],
		[1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1],
		[1,0,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	
	world2: [ 
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,3,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1],
		[1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1],
		[1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1],
		[1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1],
		[1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,2,1,1,1,1,0,0,0,1],
		[1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
		[1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
		[1,0,0,0,1,1,1,1,1,2,1,1,1,2,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1],
		[1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1],
		[1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1],
		[1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1],
		[1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1],
		[1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1],
		[1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1],
		[1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	]
};

const playerStart = {
	level1: [
		{x:6, y:5}
	],
	level2: [
		{x:27, y:2}
	]
}


// these map to the CSS classes in main.css
const cssClass = Object.freeze({
	CHEST1: 	"chest1",
	KEY1: 		"key1",
	MONSTER1: 	"monster1",
	MONSTER2: 	"monster2",
	MONSTER3: 	"monster3",
	PLAYER: 	"player",
	RING1: 		"ring1",
	TREASURE1: 	"treasure1",
	TREASURE2: 	"treasure2"
});

const allGameObjects = {
	// we aren't using .type yet
	level1:[
		{x:10, y:10, type:"monster", 	className: cssClass.MONSTER1},
		{x:2,  y:12, type:"monster",	className: cssClass.MONSTER1},
		{x:6,  y:17, type:"monster",	className: cssClass.MONSTER2},
		{x:16, y:3,  type:"monster",	className: cssClass.MONSTER3},
		{x:28, y:8,  type:"monster",	className: cssClass.MONSTER3},
		{x:27, y:14, type:"chest",		className: cssClass.CHEST1},
		{x:2,  y:18, type:"key",		className: cssClass.KEY1},
		{x:15, y:12, type:"key", 		className: cssClass.KEY1},
		{x:6,  y:7,  type:"treasure",	className: cssClass.TREASURE1},
		{x:16, y:8,  type:"treasure",	className: cssClass.TREASURE2},
		{x:16, y:16, type:"chest",		className: cssClass.CHEST1},
	],
	level2:[
		{x:2,  y:10, type:"monster", 	className: cssClass.MONSTER1},
		{x:2,  y:15, type:"monster",	className: cssClass.MONSTER2},
		{x:8,  y:5,  type:"monster",	className: cssClass.MONSTER3},
		{x:9,  y:16, type:"monster",	className: cssClass.MONSTER1},
		{x:12, y:6,  type:"monster",	className: cssClass.MONSTER2},
		{x:12, y:14, type:"monster", 	className: cssClass.MONSTER3},
		{x:14, y:3,  type:"monster",	className: cssClass.MONSTER1},
		{x:18, y:15, type:"monster",	className: cssClass.MONSTER2},
		{x:19, y:8,  type:"monster",	className: cssClass.MONSTER3},
		{x:25, y:13, type:"monster",	className: cssClass.MONSTER1},
		{x:27, y:6,  type:"monster",	className: cssClass.MONSTER2},
		{x:6,  y:4,  type:"key",		className: cssClass.KEY1},
		{x:19, y:4,  type:"key", 		className: cssClass.KEY1},
		{x:2,  y:7,  type:"treasure",	className: cssClass.TREASURE1},
		{x:6,  y:6,  type:"treasure",	className: cssClass.TREASURE2},
		{x:6,  y:12, type:"chest",		className: cssClass.CHEST1},
		{x:16, y:17, type:"treasure",	className: cssClass.TREASURE1},
		{x:22, y:2,  type:"chest",		className: cssClass.CHEST1},
		{x:27, y:18, type:"chest",		className: cssClass.CHEST1},
	]
}


