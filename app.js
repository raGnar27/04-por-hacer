const { argv } = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');



let comando = argv._[0];

switch (comando) {
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'crear':
        porHacer.crear(argv.descripcion)
            .then(tarea => {
                console.log(tarea);
            })
            .catch(e => {
                console.log(e);
            })

        break;
    case 'listar':
        let listado = porHacer.getListado();

        listado.forEach(element => {
            console.log('===========Por Hacer ============='.green);
            console.log(`${element.descripcion}`);
            console.log(`Estado: ${element.completado}`);
            console.log('=================================='.green);

        });
        break;
    case 'borrar':
        try {
            porHacer.borrar(argv.descripcion);
        } catch (error) {
            console.log(error);
        }
        break;
    default:
        console.log('Comando no reconocido');
        break;

}