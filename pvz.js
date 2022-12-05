const enterID = document.getElementById('enterID');
const enterName = document.getElementById('enterName');
const enterQuantity = document.getElementById('enterQuantity');

const findID = document.getElementById('findID');
const placeForResult = document.getElementById('findData');


const insertButton = document.getElementById('insert');
const removeButton = document.getElementById('remove');
const findButton = document.getElementById('find');

insertButton.addEventListener('click', insertData);
findButton.addEventListener('click', getDataFromLocalStorage);
removeButton.addEventListener('click', removeDataFromLocalStorage);


function insertData(evt) {
    evt.preventDefault();

    if (enterID.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 Symbols')
        return
    }
    if (enterName.value === "") {
        alert('Product Name cant be blank!')
        return
    }

    if (enterQuantity.value.length < 1) {
        alert('Product Quantity cant be blank! MIN 1 Symbols')
        return
    }
    //1. tikrinu, ar yra jau local storage mano krepselis
    //jei nera, sukuriu nauja masyva
    //jei yra parsinu duomenis

    const items = (() => {
        const fieldValue = localStorage.getItem('cart');
        return fieldValue === null
            ? []
            : JSON.parse(fieldValue);
    })();
let codes = [];
    //2.idedu i masyvo pabaiga naujos prekes duomenis
    for (let i = 0; i < items.length; i++) {
        codes.push(items[i].productID);       
        }
        console.log(codes);
      if(codes.includes(enterID.value)){
        alert("Preke tokiu kodu jau yra...");
      } else {
        console.log("nera");
        items.push({
            "productID": enterID.value,
            "Name": enterName.value,
            "quantity": enterQuantity.value
        });
        localStorage.setItem('cart', JSON.stringify(items));
      }
        
        
    //3. setinu nauja masyva i local storage


    //4.tikrinu, ar teisingai uzsetinau
    console.log(JSON.parse(localStorage.getItem("cart")));

        enterID.value = "",
        enterName.value = "",
        enterQuantity.value = ""
}


function getDataFromLocalStorage(evt) {
    evt.preventDefault();
    if (findID.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 Symbols')
        return
    }
    let products = JSON.parse(localStorage.getItem("cart"));

    let listItem = document.createElement('li');

    products.map(item => {
        if (item.productID === findID.value) {
            //console.log(item.productID + " " + item.Name);

            listItem.classList.add("list-group-item", "list-group-item-secondary");
            listItem.textContent = "Product Name: " + item.Name;
            findData.appendChild(listItem);
            let listItemSecond = document.createElement('li');
            listItemSecond.classList.add("list-group-item", "list-group-item-light");
            listItemSecond.textContent = "Product Quantity: " + item.quantity;
            findData.appendChild(listItemSecond);
        } else {

            listItem.classList.add("list-group-item", "list-group-item-secondary");
            listItem.textContent = "NERASTA PREKE";

        }
    });
    findData.appendChild(listItem);
    findID.value = "";


}

function removeDataFromLocalStorage(evt) {
    evt.preventDefault();

    if (enterID.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 Symbols')
        return
    }
    // get products from local storage
    let products = JSON.parse(localStorage.getItem("cart"));
    console.log(products);
    const index = products.findIndex(product => product.productID === enterID.value);

    if (index > -1) {
        products.splice(index, 1);
    }
    console.log(products);
    // store modified array back to local storage.
    localStorage.setItem('cart', JSON.stringify(products));

    enterID.value = "",
        enterName.value = "",
        enterQuantity.value = ""
};
