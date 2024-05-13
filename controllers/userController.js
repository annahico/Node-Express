const db = require("../database/db");
const User = require("../database/models/User");

const userController = {};

userController.createUser = (req, res) => {
	// recuperar la info a guardar en bd
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	const isActive = 1;
	const roleId = 1;

	// Validaciones
	if (!name || !email || !password) {
		return res.status(400).json("Name, email and password are required");
	}

	// tratar la informacion como por ejemplo encriptar la contraseña

	// guardar en bd
	User.create({
		name: name,
		email: email,
		password: password,
		isActive: isActive,
		roleId: roleId,
	});

	// finalmente siempre mi api debe devolver una respuesta
	res.status(201).json("CREATE USER");
};

userController.getUsers = (req, res) => {
	// consultar en la base de datos
	const users = User.find();

	res.status(200).json(users);
};

userController.updateUser = (req, res) => {
	console.log("-------------------");
	console.log(req.body);
	console.log("-------------------");

	res.status(200).send("UPDATE USER");
};

userController.deleteUser = (req, res) => {
	// recuperar el id del usuario a eliminar
	const userIdToDelete = req.params.id;

	// eliminar de la db el usuario por id
	const userDeleted = User.delete(userIdToDelete);

	if (userDeleted) {
		res.status(200).json("DELETE USER " + req.params.id);
	} else {
		res.status(404).json("User doesnt exist: " + req.params.id);
	}
};

userController.findUserById = (req, res) => {
	// recuperar el id del usuario que quieto recupear
	const userId = req.params.id;

	// recuperar el usuario de la base de datos a traves del modelo
	const user = User.findById(userId);

	// finalmante devolvemos una respuesta
	if (!user) {
		res.status(404).json("User doesnt exists");
	} else {
		res.status(200).json(user);
	}
};

module.exports = userController;