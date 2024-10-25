// Получаем все элементы со страницы
const serviceTypeInputs = document.querySelectorAll('input[name="serviceType"]');
const optionsSelect = document.querySelector('#options');
const propertyCheckbox = document.querySelector('#prop');
const quantityInput = document.querySelector('#quantity');
const resultDiv = document.querySelector('#result');
let optionsDiv = document.getElementById("optionsInput");
let propDiv = document.getElementById("propertiesInput");

optionsDiv.style.display = "none";
propDiv.style.display = "none";

let serviceType = 1; 
let options = [200, 250, 300, 500]; 
let prop = false;
let price = 100; 
let quantity = quantityInput.value; 


function updatePrice() {
    
    quantity = quantityInput.value;
    serviceType = parseInt(document.querySelector('input[name="serviceType"]:checked').value);
    let newPrice = price * quantity;

    optionsDiv.style.display = (serviceType == "2" ? "block" : "none");
    propDiv.style.display = (serviceType == "3" ? "block" : "none");
    
    if (serviceType === 2) {
        options = [parseInt(optionsSelect.value)];
        options.forEach(option => newPrice += option * quantity);
    }

    
    if (serviceType === 3) {
        prop = propertyCheckbox.checked;
    }

    if (prop)
        newPrice += 100;
    
    resultDiv.innerHTML = `Стоимость: ${newPrice} рублей`;
}


serviceTypeInputs.forEach(input => input.addEventListener('change', updatePrice));
optionsSelect.addEventListener('change', updatePrice);
propertyCheckbox.addEventListener('change', updatePrice);
quantityInput.addEventListener('change', updatePrice);


updatePrice();
