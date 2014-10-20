var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/ninjasvszombies');

var schema = Mongoose.Schema({
	health: { type: String, required: true },
	weapons: { type: String, required: true },
	skills: { type: String, required: true },
	abilities { type: String, required: true },
	kills: {type: String, required: true };
});

var Ninja = Mongoose.model("Ninja", schema);

var ninja = new Ninja({
	health: "Healthy",
	weapons: "Samurai Sword", 
	skills: "Martial Arts, Kung Fu",
	abilities: "Wall Running",
	kills: "27"
});

ninja.save(function (err, ninja) {
	if (err) throw err;
	console.log("Cat Saved Successfully");
});

