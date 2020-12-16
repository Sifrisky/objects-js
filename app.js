/*const PeliculaUno = {
    nombre: 'Harry',
    id: 1,
    reproducir(){ //metodo o funcion
        return `reproduciendo pelicula... ${this.nombre}`;
    }
}*/
//Plantilla de pelicula
class Pelicula {
//Crear objeto
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
    //crear un metodo llamado reproducir.
    reproducir(){
        return `Reproduciendo Pelicula ${this.nombre}`  //aca podemos llamar nombre o id que son las unicas propiedades que tenemos. 
    }
}

//Heredar o extender, creamos una segunda clase debemos extender de la clase primera la siguiente.
class Serie extends Pelicula{
//Creando un nuevo constructor con sus propias propiedades, le agrego capitulo
constructor(nombre, id, cap){
    super(nombre, id);
    this.cap = cap;
}   
//creamos otr a funcion/metodo, no creo el constructor porque lo estoy "heredando"  
    reproducirCapitulo(){
        return `Reproduciendo capitulo ${this.cap}...${this.nombre}`
    }
}
//Instanciar, crear un nuevo objeto a traves de una plantilla llamada Pelicula.
const PeliculaUno = new Pelicula('Harry', 1); //aca se ha creado mi primer objeto
const PeliculaDos = new Pelicula('Hombre Araña', 2);
const SerieUno = new Serie('Dexter', 3, 25);

console.log(PeliculaUno.reproducir());
console.log(PeliculaDos.reproducir());
console.log(SerieUno.reproducirCapitulo());