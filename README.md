# Programación orientada a objetos.

_La programación orientada a objetos son paradigmas de la programación, hoy veremos un ejemplo simple a continuación:_

## Comenzando 🚀

_Crearemos objetos literales:
Para este caso, nombre y id serian los atributos del objeto y reproducir() el metodo_


```
Ejemplo 1. Objeto literal.

const PeliculaUno = {
    nombre: 'Harry',
    id: 01,
    reproducir(){
        return `reproduciendo pelicula... ${this.nombre}`;
        
    }
}
```

_Todo el objeto anterior es Harry, para acceder a algo dentro de la llave se llama "this"._

```
Imprimimos por consola:

console.log(PeliculaUno); //Acá tendremos como resultado--> Harry.
console.log(PeliculaUno.reproducir()); //Acá tendfremos como resultado --> reproduciendo pelicula Harry.


- Ejemplo 2. Creando Objetos literales (Repetimos el 1 con otra pelicula).

const PeliculaDos = {
    nombre: 'Hombre Araña',
    id: 02,
    reproducir(){
        return `reproduciendo pelicula... ${this.nombre}`;
        
    }
}
```


_Esto anterior esta muy bien, pero y si hablamos de una empresa como Netflix, ¿cómo podriamos hacer para reproducir miles de peliculas iguales? ¿como podriamos resolver el tema de crear objetos literales? Aqui es donde entra en juego las clases. Una clase es como una plantilla de objetos creados de forma literal y ocupamos el molde para crear muchas peliculas parecidas._

_En nuestro ejemplo, dejaremos una sola plantilla y lo que debemos hacer es instanciar un objeto. 
Esto es la creacion "ocupar la plantilla y crear el primer objeto" hacemos una constante que sera igual a un nuevo objeto con la palabra reservada new que hace referencia a esa plantilla._

```
 Ejemplo 3. Creando la Clase Pelicula.

class Pelicula {
//constructor pasamos los parametros  o no, que son las propiedades del objeto.
    constructor(nombre, id) {
        this.nombre = 'Harry';
        this.id = 01;
    }
    //metodos
 reproducir(){
     return `Reproduciendo pelicula ${this.nombre}`;
 }
}

```
## importante. 
- Solo puedes ocupar un constructor pero si puedes hacer muchos metodos.
- Instanciar: Es crear un nuevo objeto a traves de una plantilla llamada Pelicula.
- La plantilla tiene la capacidad de utilizar todo lo que tiene pelicula y aparte tiene su propio metodo.

```
//Ahora lo guardamos en una constante y colocamos la palabra reservada new con el mismo nombre de la clase.
//Entre los parentesis pasamos los parametros designados.

const PeliculaUno = new Pelicula(); //aca se ha creado mi primer objeto
const PeliculaDos = new Pelicula(); // aca se ha creado mi segundo objeto
console.log(PeliculaDos);
```

Hasta ahora es estatico pero si pasamos parametros nombre y id a la clase y reemplazamos el this por ello pues podemos hacerlo dinamico. 

Por otro lado, Netfliz tambien series, en este caso usariamos el extends. (que se extiende hasta...). La palabra reservada extends tendra las mismas propiedades que en las lineas arriba, tanto el constructor como su funcionalidad.

```
Ejemplo 4. Creando la clase Serie apartir de Pelicula.


class Serie extends Pelicula{
    //no creo constructor porque lo estoy heredando asi que creo directamente el metodo.
    reproducirCapitulo(){
        return `Reproduciendo capitulo...${this.nombre}`;//

    }
}
```

Usamos la palabra reservada new que hace referencia a la plantilla creada, pelicula.

```
const PeliculaUno = new Pelicula("Harry", 1);
const PeliculaDos = new Pelicula("Araña", 2);
const PeliculaTres = new Pelicula("Avengers",3);
const SerieUno = new Serie("WandaVision", 4);

//Metodos:
console.log(PeliculaTres.reproducir());
console.log(PeliculaDos.reproducir());
console.log(PeliculaUno);
console.log(SerieUno.reproducirCapitulo());
```

Además, la serie tiene una lista de capitulos y para ello se crea el constructor y se llama a los mismos parametros. Si ya ocupamos nombre y id, podemos usamos la palabra reservada super y con esto le digo que uso el nombre y id que extiendo de Pelicula.

## Heredar una clase: 
_En la practica se hace extendiendola con el mismo nombre, entonces esta hereda lo ya declarado pero la clase padre no accederia al hijo (no es viceversa) es decir, Pelicula no puede tomar la funcion/metodo reproducirCapitulo() de la class Serie pero Serie si puede tomar la info de clase.


Dato importante: para trabajar con Class hay que tener cuidado con la compatibilidad de los navegadores, con typescrit se utiliza class y al compilarlo lo traduce a un js que lee todos los navegadores web. Y Angular utiliza typescript y vista co_


## Ejecutando las pruebas ⚙️

_Dirigete al navegador en "inspect" y verifica la respuestas que se imprimen en consola. Si usas visual estudio code podrias usar la extension live server_


## Construido con 🛠️

_visual studio code_

Para descargarlo
* [Dropwizard](https://code.visualstudio.com/download) - El editor usado.


## Autores ✒️

* **Astrid Medina** - *Trabajo Inicial - Documentacion - code - ideas* - [Sifrisky](https://github.com/Sifrisky)


## Gracias por leerme 🎁🤓.



---
⌨️ con ❤️ por [Sifrisky](https://github.com/Sifrisky) 
