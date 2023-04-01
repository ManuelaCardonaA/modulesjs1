export const nombre = 'Juan Perez';

export const suma = (n1, n2)=>{
    return n1+n2
}

export const transporte= {
    tipo: 'moto',
    marca: 'Yamaha',
    placa: 'XCY-29C',
    año: 2018,
    añosdeuso: 5,
    kilometraje: 22000,
    dueño:{
        Nombre: 'Juan Esteban',
        Apellido: 'Ocampo Torres',
        Documento: '335753'
    },

    //método
    imprimir_datos: function(){
        return `Su vehiculo es ${this.tipo} de la marca ${this.marca}, con placa ${this.placa}`;  
    },
    Kilometrajexaño: function(a, b){
        return a / b;
    },

}

export class Carro{
    constructor(Marca, Placa, Año, Modelo, Color){
        this.Marca = Marca;
        this.Placa = Placa;
        this.Año = Año;
        this.Modelo = Modelo;
        this.Color = Color;
    }

    //Métodos
    datosCarro(){
        return `Su carro es de marca ${this.Marca} tiene placa ${this.Placa}, del año ${this.Año}, con modelo ${this.Modelo} y color ${this.Color}`;
    }
}

let Carro1 = new Carro('NISSAN', 'AKK-869', 2012, 'MARCH', 'Gris');

 export class Moto extends Carro{
    //Constructor de la clase Gatos, como hereda debe tener el mismo constructor de la clase padre
    constructor(Marca, Placa, Año, Modelo, Color, Cilindraje){
        //Se inicializa lo que hereda con la palabra SUPER
        super(Marca, Placa, Año, Modelo, Color);
        //Se inicializa unicamente lo que esta en la clase nueva
        this.Cilindraje = Cilindraje;
    }

    //Método
    Mostrarmoto(){
        return `Su moto es de marca ${this.Marca} tiene placa ${this.Placa}, del año ${this.Año}, con modelo ${this.Modelo}, su cilindraje es de ${this.Cilindraje} y color ${this.Color}`;
    }
}
