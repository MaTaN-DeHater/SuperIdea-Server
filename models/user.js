const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String,
    fullName: String,
    type: {
        type: String,
        enum: ['student', 'teacher'],
        default: 'student'
    }
});


module.exports = mongoose.model('User', UserSchema);
