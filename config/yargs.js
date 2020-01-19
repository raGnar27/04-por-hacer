const descripcion = {
    demand: true,
    alias: 'd',
    des: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    des: 'Indica si la tarea esta completada'
}

const argv = require('yargs') //recibe (nombre de comando, descripción, objeto)
    .command('crear', 'Crea una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tareas creadas')
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}