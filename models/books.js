let mongoose = require('mongoose');
let Schema = mongoose.Schema 
let ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://javas:1qs2wd3ef@cluster0-shard-00-00-xi6pm.mongodb.net:27017,cluster0-shard-00-01-xi6pm.mongodb.net:27017,cluster0-shard-00-02-xi6pm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
 
var booksSchema = new Schema({
    isbn    	: String,
    title    	: String,
    author      : String,
    category    : String,
    stock		: Number,
    createdAt	: Date
});
var Books = mongoose.model('Books', booksSchema);
module.exports = Books