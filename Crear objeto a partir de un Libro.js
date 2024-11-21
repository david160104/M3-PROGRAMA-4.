// Definición del objeto libro
let libro = {
   titulo: "Ejemplo de Libro",
    autor: "Autor Desconocido",
    anio: 2021,
    estado: "disponible",
   capitulos: [],
    
    // Método para describir el libro
    describirLibro() {
      console.log( `${this.titulo},
        ${this.autor},
        ${this.anio},
        ${this.estado}.`);
  },
  
    // Método para agregar un capítulo
    agregarCapitulo(capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo "${capitulo}" agregado.`);
   },
  
    // Método para eliminar un capítulo
    eliminarCapitulo(capitulo) {
      const index = this.capitulos.indexOf(capitulo);
      if (index !== -1) {
        this.capitulos.splice(index, 1);
       console.log(`Capítulo "${capitulo}" eliminado.`);
     } else {
        console.log(`Capítulo "${capitulo}" no encontrado.`);
      }
    }
  };
  
  // Ejemplo de uso
 libro.describirLibro();
 libro.agregarCapitulo("Capítulo 1: Introducción");
 libro.agregarCapitulo("Capítulo 2: Desarrollo");
 libro.agregarCapitulo("capitulo 3: Indice")
 console.log(libro.capitulos); // Muestra los capítulos restantes
