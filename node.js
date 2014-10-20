"use strict";

var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/ninjasvszombies');

var Ninja = Mongoose.model("Ninja");

var ninjaOne = new Ninja({
	health: "Healthy",
	weapons: "Samurai Sword", 
	skills: "Martial Arts, Kung Fu",
	abilities: "Wall Running",
	kills: "27"
});

var Zombie = Mongoose.model("Zombie");

var zombieOne = new Zombie({
	health: "Undead",
	appendages: "Legs, One Arm",
	attackLevel: "Super Tough",
	kills: "2"
});

ninja.save(function (err, ninjaOne) {
	if (err) throw err;
	console.log("Cat Saved Successfully");
});

zombie.save(function (err, zombieOne) {
	if (err) throw err;
	console.log("Zombie Saved Successfully");
});
