export default class Publicacion {
  constructor (titulo, autor, contenido, fecha, imagenes) {
    this.titulo = titulo
    this.autor = autor
    this.contenido = contenido
    this.fecha = fecha
    this.imagenes = imagenes || {}
  }
}
