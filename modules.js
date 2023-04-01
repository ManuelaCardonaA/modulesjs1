import {transporte, Carro, Moto} from './moduletwo.js'

console.log(transporte.imprimir_datos());


let Usar = () => {

    let Carro1 = new Carro('NISSAN', 'AKK-869', 2012, 'MARCH', 'Gris');
    let Moto1 = new Moto('YAMAHA', 'BCC-86D', 2020, 'NMAX', 'Rojo', '155 cc');
    console.log("estos son los vehiculos de nuestra base de datos: **",transporte.imprimir_datos(),"** CARROS: **", Carro1.datosCarro(), "** MOTOS: **", Moto1.Mostrarmoto())
}

Usar();