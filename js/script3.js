"use strict"


// 001 - Usando JavaScript, selecciona el enlace (<a>) y verifica si tiene el atributo target. Si lo tiene, imprime en la consola su valor, de lo contrario, imprime "El atributo target no está presente".
let enlace = document.querySelector('a');
if (enlace.hasAttribute('target')) {
    console.log(enlace.getAttribute('target'));
} else {
    console.log("El atributo target no está presente");
}

// 002 - Usando JavaScript, selecciona el primer elemento li dentro de la lista y verifica si tiene el atributo data-tipo. Si lo tiene, imprime en la consola su valor, de lo contrario, imprime "El atributo data-tipo no está presente".
let primerLi = document.querySelector('li');
if (primerLi.hasAttribute('data-tipo')) {
    console.log(primerLi.getAttribute('data-tipo'));
} else {
    console.log("El atributo data-tipo no está presente");
}

// 003 - Usando JavaScript, selecciona el párrafo con clase parrafo y cambia su atributo data-tipo a "nuevo-parrafo". Luego, imprime en la consola el nuevo valor del atributo.
let parrafo = document.querySelector('.parrafo');
parrafo.setAttribute('data-tipo', 'nuevo-parrafo');
console.log(parrafo.getAttribute('data-tipo'));

// 004 - Usando JavaScript, selecciona el título (<h1>) y agrega un nuevo atributo llamado style con el valor color: blue;.
let titulo = document.querySelector('h1');
titulo.setAttribute('style', 'color: blue;');

// 005 - Usando JavaScript, selecciona el primer elemento li y elimina su atributo data-tipo. Luego, imprime en la consola la lista de atributos restantes.
primerLi.removeAttribute('data-tipo');
console.log(primerLi.attributes);

// 006 - Usando JavaScript, selecciona el enlace (<a>) y verifica si tiene algún atributo personalizado en el dataset. Si los tiene, imprime en la consola todos los atributos personalizados presentes.
if (Object.keys(enlace.dataset).length > 0) {
    for (let attr in enlace.dataset) {
        console.log(`${attr}: ${enlace.dataset[attr]}`);
    }
} else {
    console.log("No hay atributos personalizados en el dataset");
}
