const userController = {};

userController.createUser = (req, res) => {

    console.log('-------------------');
    console.log(req.body);
    console.log('-------------------');

    // recuperar la info a guardar en bd
    // Validaciones
    // tratar la informacion
    // guardar en bd
    // finalmente siempre mi api debe devolver una respuesta


    res.status(200).send('CREATE USER')
}

userController.getUsers = (req, res) => {
    res.status(200).send('GET USERS')
}

userController.updateUser = (req, res) => {

    console.log('-------------------');
    console.log(req.body);
    console.log('-------------------');

    res.status(200).send('UPDATE USER')
}

userController.deleteUser = (req, res) => {
    res.status(200).send('DELETE USER ' + req.params.id)
}


module.exports = userController;