const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: String,
    email: { type: String, unique: true },
    senha: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
