const mongoose = require('mongoose');

//usar 0.0.0.0:27017 en vez de localhost:3000 soluciona el problema de 
// MongoError: connect ECONNREFUSED 127.0.0.1:27017
mongoose.connect("mongodb://0.0.0.0:27017/biblioteca", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;