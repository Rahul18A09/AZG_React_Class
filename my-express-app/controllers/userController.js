let users  = require('../data/users');


// GET users
exports.getUsers = (req, res) => {
    res.json(users);
};


// POST user
exports.addUser = (req, res) => {
    const newUser = {
        id: users.length + 1 ,
        name: req.body.name
    };

    users.push(newUser);
    res.json(newUser);
};





// PUT user
exports.updateUser = (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if(!user) return res.send("User not found");

    user.name = req.body.name;
    res.status(200).json({
        success: true,
        message: "Update Success",
        user: user,
    });

};

// DELETE user
exports.deleteUser = (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send("User deleted");

};