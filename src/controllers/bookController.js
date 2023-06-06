// Importar el modelo de libros
const Book = require('../models/Book');

// Obtiene la lista de libros disponibles
exports.getBooks = (req, res) => {

  Book.find({}, (err, books) => {
    if (err) {
      // maneja error
      return res.status(500).json({ error: 'Error al obtener la lista de libros' });
    }
    // Enviar la lista de libros como respuesta
    res.status(200).json(books);
  });
};

// Obtiene los detalles de un libro específico
exports.getBookDetails = (req, res) => {
  const bookId = req.params.id;

  // Busca el libro por su ID en la base de datos
  Book.findById(bookId, (err, book) => {
    if (err) {
      //maneja error
      return res.status(500).json({ error: 'Error al obtener los detalles del libro' });
    }

    if (!book) {
      // sino hay libro aparece error 404
      return res.status(404).json({ error: 'Libro no encontrado' });
    }

    // Detalles de los libros 
    res.status(200).json(book);
  });
};

// Controller de cambios de portada
exports.changeBookCover = (req, res) => {
  const bookId = req.params.id;
  const { color, text, finish, image, pattern } = req.body;

  // Encontrar el libro por su ID y actualizar los cambios en la portada
  Book.findByIdAndUpdate(
    bookId,
    { $set: { color, text, finish, image, pattern } },
    { new: true },
    (err, book) => {
      if (err) {
        // maneja error
        return res.status(500).json({ error: 'Error al cambiar la portada del libro' });
      }

      if (!book) {
        // Si no se encuentra el libro, responder con un error 404
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      // Enviar el libro actualizado como respuesta
      res.status(200).json(book);
    }
  );
};

// Controlador para agregar un libro al carrito de compras
exports.addToCart = (req, res) => {
  const bookId = req.params.id;

  // Lógica para agregar el libro al carrito de compras
  // ...

  // Enviar una respuesta de éxito
  res.status(200).json({ message: 'Libro agregado al carrito de compras' });
};
