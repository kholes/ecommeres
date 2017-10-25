let mongoose = require('mongoose')
let Schema = mongoose.Schema 
let ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/dbecommerce');
var membersSchema = new Schema({
	username: String,
	password: String,
	salt: String,
	role: String
})
var Members = mongoose.model('Members', membersSchema);
module.exports = Members