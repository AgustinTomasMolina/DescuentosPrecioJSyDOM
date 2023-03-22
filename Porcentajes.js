const buttonResult = document.querySelector('#botton');
const resultadoDesc = document.querySelector('#result');

buttonResult.addEventListener('click', () => capturaResult());

const capturaResult = () => {
    const numero1 = document.querySelector('#descuento').value;
    const numero2 = document.querySelector('#precio').value;
    return porcentajeDescuento(numero1, numero2);
}

function porcentajeDescuento(descuento, precio) {
    console.log(descuento, precio);
    let desc = descuento;
    let price = precio;
    let resultado;

    console.log({precio , descuento});

    if (!price || !descuento) {

        resultadoDesc.innerText = 'Porfavor llenar los datos'
        return;
    } 
    if (descuento > 100) {

        resultadoDesc.innerText = 'El descuento es mayor a 100'
        return;
    }

        resultado = (price * (100 - descuento)) / 100;
    
    resultadoDesc.innerText = 'El nuevo precio con descuento es $' + resultado;
    } 
