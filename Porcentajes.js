const buttonResult = document.querySelector('#botton');
const resultadoDesc = document.querySelector('#result');

buttonResult.addEventListener('click', () => capturaResult());

const capturaResult = () => {
    const cuponDescuento = document.querySelector('#cupon').value;
    const precioProducto = document.querySelector('#precio').value;
    return porcentajeDescuento(cuponDescuento, precioProducto);
}

/* const cuponObj = {
    'agusmol': 15,
    'moli99': 25,
    'genialidad': 30,
    'monstruo': 35,
}
 */

const cuponLista = [];
cuponLista.push({
    name: 'agusmol',
    discount: 30,
});
cuponLista.push({
    name: 'agustintomasmolina',
    discount: 25,
});
cuponLista.push({
    name: 'molinari',
    discount: 35,
});


function porcentajeDescuento(cuponDescuento, precio) {
    let cupon = cuponDescuento;
    let price = precio;
    let resultado;

    if (!price || !cupon) {

        resultadoDesc.innerText = 'Porfavor llenar los datos'
        return;
    }

    let discount;


    function filtrarCupones(cuponElemento) {
        return cuponElemento.name == cupon;  // Con esta funcion se genera una validacion, y dice si cuponElemento.name, es igual a los cupones
                                            // que escribe el usuario en el INPUT.
    }



    const cuponDeArray = cuponLista.find(filtrarCupones); // Para evitar el "for", enviamos una funcion como argumento, donde el
        // metodo "find" nos devuelve un objeto, si esque en la primer funcion se encuentra en la validacion.



    if (cuponDeArray) {  // Si existe tal cupon que escribio el usuario pasa. Este mismo contiene el name y el descuento.

        discount = cuponDeArray.discount;

    } else {

        resultadoDesc.innerText = 'El cupon no es valido'
        return;
    }

    console.log({
        cupon,
        discount,
        cuponDeArray,
        cuponLista
    });

    /*     if (cuponObj[cupon]) {   // Se pregunta si dentro del objeto existe algun elemento 
                                //  que el cupo que escribieron los usuarios en el input en el HTML.
    
            discount = cuponObj[cupon]; // Descuento es igual al elemento obj. y al input que genera el usuario.
    
        }else {
    
            resultadoDesc.innerText = 'El cupon no es valido'
            return;
        } */



    /*  switch (cupon) {
         case 'Molina_cupon':
             descuento = 30;
             break;
         case "no_sigas_las_reglas":
             descuento = 25;
             break;
 
         default:
             resultadoDesc.innerText = 'El cupon no es valido'
             return;         
     } */
    /*
           let descuento;
        
        if (cupon == "Molina_cupon") {
            descuento = 30;
        } else if(cupon == "no_sigas_las_reglas") {
            descuento = 25;
        } else {
            resultadoDesc.innerText = 'El cupon no es valido'
            return;
        } */

    resultado = (price * (100 - discount)) / 100;

    resultadoDesc.innerText = 'El nuevo precio con descuento es $' + resultado;
    
    }
