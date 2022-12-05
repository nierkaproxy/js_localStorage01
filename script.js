const enterCode = document.getElementById('enterID');
const enterName = document.getElementById('enterName');
const enterQuantity = document.getElementById('enterQuantity');

const insertButton = document.getElementById('insert');
const removeButton = document.getElementById('remove');

const findCode = document.getElementById('findID');

const getButton = document.getElementById('find');

const my_results = document.getElementById('findData');

object = [];

const insert = (e) => {
    e.preventDefault();
    console.log(enterCode.value, enterName.value, enterQuantity.value);
    if(enterCode.value.length < 3 ){
        alert('Product Code laukelyje turi buti bent 3 symboliai!')
    }else if(enterName.value.length < 3){
        alert('Product Name laukelyje turi buti bent 3 symboliai')
    }else if(enterQuantity.value.length < 1){
        alert('Product Quantity laukelis negali buti tuscias')
    }

    cart = {
        code: '',
        name: '',
        quantity: ''
    }

    cart.code = enterCode.value;
    cart.name = enterName.value;
    cart.quantity = enterQuantity.value;

    object.push(cart);

    console.log(object)

    enterCode.value = ''
    enterName.value = ''
    enterQuantity.value = ''
    
    localStorage.setItem('cart', JSON.stringify(object));
}

insertButton.addEventListener('click', insert);


const remove = () => {

}

removeButton.addEventListener('click', remove);


const getData = () => {

}


getButton.addEventListener('click', getData);


// localStorage.clear()