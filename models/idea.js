const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
    rating: {type: Number, default: 0},
    title: String,
    description: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
})
module.exports = mongoose.model('Idea', IdeaSchema);
