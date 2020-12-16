# Programación orientada a objetos.

creando objetos literales:
const PeliculaUno = {
    nombre: 'Harry',
    id: 01,
    reproducir(){
        return `reproduciendo pelicula... ${this.nombre}`;
        
    }
}

//volvemos a repetir.

console.log(PeliculaUno.reproducir());

const PeliculaDos = {
    nombre: 'Hombre Araña',
    id: 02,
    reproducir(){
        return `reproduciendo pelicula... ${this.nombre}`;
        
    }
}


como resolver escribir muchas peliculas iguales??
trabajar con clases resuelve el tema de crear objetos literales.
Usa clases que son como una plantilla de objetos creados de forma literal.

dejamos una sola plantilla.

debemos hacer instanciar un objeto. Esto es la creacion "ocupar la plantilla y crear el primer objeto" hacemos una constante que sera igual a un nuevo objeto. la palabra reservadanew hace referencia a esa plantilla.

class Pelicula {
    constructor(nombre, id) {
        this.nombre = 'Harry';
        this.id = 01;
    }
}

debemos meterlo en una constante y colocar new con el mismo nombre de la clase y entre aprentesis pasarle los parametros designados.

//Instanciar, crear un nuevo objeto a traves de una plantilla llamada Pelicula.
//const PeliculaUno = new Pelicula(); //aca se ha creado mi primer objeto
const PeliculaDos = new Pelicula();
console.log(PeliculaDos);

hasta ahora es estatico pero si pasamos parametros nombre y id a la clase y reemplazamos el this por ello pues podemos hacerlo dinamico.

Heredar una clase se hace extendiendola con el mismo nombre, entonces este hereda lo ya declarado pero la clase padre no accederia al hijo (no es viceversa) es decir, pelicula no puede tomar la funcion/metodor reproducir capitulo de class Serie.o serie si puede tomar la info de clase.
La serie tieen lista de capitulos y para ello debo crear el constructor y lalmar los mismos parametros. Como ya ocupamos los nombre y id, usamso la palabra reservada super, con esto le digo que uso el nombre y id que extiendo de pelicula.
La plantilla tiene la capacodad de utilizxar todo o que tiene pelicula y aparte tiene su propio metodo.

dato: para trabajar con Class hay que tener cuidado con la compatibilidad de los navegadores, con typescrit se utiliza class y al compilarlo lo tradu ce a un js que lee todos los navegadores web. Y Angular utiliza typescript y vista controlada.