const enterCode = document.getElementById('enterID');
const enterName = document.getElementById('enterName');
const enterQuantity = document.getElementById('enterQuantity');

const insertButton = document.getElementById('insert');
const removeButton = document.getElementById('remove');

const findCode = document.getElementById('findID');

const getButton = document.getElementById('find');

const my_results = document.getElementById('findData');


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

    const item = (() => {
        const value = localStorage.getItem('cart');
        return value === null
            ? []
            : JSON.parse(value);
    })();

const objects = [];

    for(let i = 0; i < item.length; i++){
        objects.push(item[i].productCode)
    }

    if(objects.includes(enterID.value)){
        alert('Produktas tokiu kodu yra');
    } else{
        item.push({
            "productCode": enterCode.value,
            "name": enterName.value,
            "quantity": enterQuantity.value
        });
        localStorage.setItem('cart', JSON.stringify(item));
    }
    
    console.log(JSON.parse(localStorage.getItem("cart")));

    document.getElementById('forma').reset()
}

insertButton.addEventListener('click', insert);


const getData = (e) => {
    e.preventDefault();

    if(findCode.value.length < 3){
        alert('Product Code laukelyje turi buti bent 3 symboliai!')
    }    

    const findItem = JSON.parse(localStorage.getItem('cart'));

    

    findItem.map(item => {
        if(item.productCode === findCode.value){

            const listName = document.createElement('li');
            listName.textContent = "Product Name: " + item.name;
            listName.setAttribute(
                'class',
                'p-3 mb-2 bg-dark text-white'
            )

            const listQuantity = document.createElement('li');
            listQuantity.textContent = "Product quantity: " + item.quantity;
            listQuantity.setAttribute(
                'class',
                'p-3 mb-2 bg-secondary text-white'
            )

            findData.appendChild(listName);
            findData.appendChild(listQuantity);
        } else {
            const list = document.createElement('li');
            list.textContent = "Product not found";
            list.setAttribute(
                'class',
                'p-3 mb-2 bg-secondary text-white'
            )
            findData.appendChild(list);
        }
    });
    
    
    document.getElementById('forma2').reset()
}

getButton.addEventListener('click', getData);

const remove = (e) => {
    e.preventDefault();

    if(enterCode.value.length < 3){
        alert('Product Code laukelyje turi buti bent 3 symboliai!')
    }
    const itemRemove = JSON.parse(localStorage.getItem('cart'));
    console.log(itemRemove);
    const index = itemRemove.findIndex(itemRemove => itemRemove.productCode === enterCode.value);

    if(index > -1) {
        itemRemove.splice(index, 1);
    }
    console.log(itemRemove);
    localStorage.setItem('cart', JSON.stringify(itemRemove));

    document.getElementById('forma').reset();
}

removeButton.addEventListener('click', remove);


// localStorage.clear()