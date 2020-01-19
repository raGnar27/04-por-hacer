const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            throw new Error('El archivo no se pudo guardar'.red);
        } else
            return 'El archivo se guardo correctamente'.green;
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = descripcion => {
    return new Promise((resolve, reject) => {

        cargarDB();
        let porHacer = {
            descripcion,
            completado: false
        };

        if (porHacer.descripcion === '') {
            reject('No se guardo, descripción vacía')
        } else {
            listadoPorHacer.push(porHacer);
            guardarDB();
            resolve(porHacer);
        }
    })
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
    } else {
        return false;
    }

    guardarDB();

}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();

        //también se puede hacer con la función listado.filter


        return true;
    } else {
        return false;
    }


};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}