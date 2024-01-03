// 001-Usando childNodes, selecciona y muestra en la consola todos los nodos hijos del div con id contenedor.
let contenedor = document.getElementById('contenedor');
console.log(contenedor.childNodes);

// 002-Usando firstChild, selecciona y muestra en la consola el primer hijo del div con id contenedor.
console.log(contenedor.firstChild);

// 003- Usando lastChild, selecciona y muestra en la consola el último hijo del div con id contenedor.
console.log(contenedor.lastChild);

// 004- Usando parentElement, selecciona y muestra en la consola el elemento padre del h1.
let tituloPrincipal = document.querySelector('h1');
console.log(tituloPrincipal.parentElement);

// 005- Usando children, selecciona y muestra en la consola todos los elementos hijos de la lista desordenada (ul).
let lista = document.querySelector('ul');
console.log(lista.children);

// 006- Usando firstElementChild, selecciona y muestra en la consola el primer elemento hijo del div con id contenedor.
console.log(contenedor.firstElementChild);

// 007- Usando lastElementChild, selecciona y muestra en la consola el último elemento hijo del div con id contenedor.
console.log(contenedor.lastElementChild);

// 008 -Usando previousElementSibling, selecciona y muestra en la consola el elemento anterior al párrafo con clase parrafo.
let parrafo = document.querySelector('.parrafo');
console.log(parrafo.previousElementSibling);

// 009 - Usando nextElementSibling, selecciona y muestra en la consola el elemento siguiente al párrafo con clase parrafo.
console.log(parrafo.nextElementSibling);

// 010- Usando JavaScript, selecciona el primer elemento li dentro de la lista y muestra en la consola su nodeType, nodeName y tagName.
let primerLi = document.querySelector('li');
console.log(`nodeType: ${primerLi.nodeType}, nodeName: ${primerLi.nodeName}, tagName: ${primerLi.tagName}`);

// 011- Usando JavaScript, selecciona el enlace (<a>) y muestra en la consola su innerHTML y outerHTML.
let enlace = document.querySelector('a');
console.log(`innerHTML: ${enlace.innerHTML}, outerHTML: ${enlace.outerHTML}`);

// 012 -Usando JavaScript, selecciona el párrafo con clase parrafo y muestra en la consola su nodeValue y textContent.
console.log(`nodeValue: ${parrafo.nodeValue}, textContent: ${parrafo.textContent}`);

// 013- Usando JavaScript, selecciona el div con id contenedor y verifica si tiene el atributo hidden. Si lo tiene, imprime en la consola "El elemento está oculto", de lo contrario, imprime "El elemento no está oculto".
if(contenedor.hasAttribute('hidden')) {
    console.log("El elemento está oculto");
} else {
    console.log("El elemento no está oculto");
}
