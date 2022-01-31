"use strict";

// нужно посчитать все значения через value и сложить

const form = document.querySelector('.form');

const input = document.querySelector('.price');

const select = document.querySelector('.auction');

const servise = document.querySelectorAll('.input-servise');

const additionalPrice = {
    HONDA: 5,
    KIA: 4,
    BMW: 8,
    VOLKSWAGEN: 7,
};

const fuel = document.querySelectorAll('.input-fuel');

const engineCapacity = document.querySelector('.capacity');

const enginePower = document.querySelector('.power');

const age = document.querySelectorAll('.input-age');

const customer = document.querySelectorAll('.input-customer');

// функция, которая срабатывает при отправке

form.onsubmit = (evt) => {
    evt.preventDefault();

    check();
    
    let total;
    
    const price = input.value;
    const statusAuction = select.value;
    const capacity = engineCapacity.value;
    const power = enginePower.value;

    
    // Подсчет стоимости: цена, аукцион, объем двигателя, мощность
    total = price*additionalPrice[statusAuction]*power*capacity;

    // добавление коэффициента для типа услуги
    for (let i = 0; i < servise.length; i++) {
        if (servise[i].checked) {
        total = total*Number(servise[i].value);
        }
    }

    // добавление коэффициента для типа топлива
    for (let i = 0; i < fuel.length; i++) {
        if (fuel[i].checked) {
        total = total*Number(fuel[i].value);
        }
    }

    // добавление коэффициента для возраста авто
    for (let i = 0; i < age.length; i++) {
        if (age[i].checked) {
        total = total*Number(age[i].value);
        }
    }

    // добавление коэффициента для получателя
    for (let i = 0; i < customer.length; i++) {
        if (customer[i].checked) {
        total = total*Number(customer[i].value);
        }
    }

    document.getElementById("result").innerHTML = total;
}

