var xatSelekt = document.querySelector('#xat-select');
var xatText = document.querySelector('#xat-text');
function xatShablon(word) {
    return 'Salom' + ' ' + word
}
xatSelekt.addEventListener('change', function () {
    xatText.value = xatShablon(xatSelekt.value)
})
var hayoqForm = document.querySelector('#ha-yoq-form');
var ha = document.querySelector('#ha');
var yoq = document.querySelector('#yoq');
var hayoqInput = document.querySelector('#ha-yoq-input');
var yomgir = document.querySelector('#yomgir');
var zal = document.querySelector('#zal');
let yomgirIsChecked = false;
let zalIsChecked = false;
yomgir.addEventListener('click', function () {
    yomgirIsChecked = !yomgirIsChecked;

    if (yomgirIsChecked) {
        yoq.style.color = 'red';
        ha.style.color = 'white';
    }
})
zal.addEventListener('click', function () {
    zalIsChecked = !zalIsChecked;

    if (zalIsChecked) {
        ha.style.color = 'green';
        yoq.style.color = 'white';
    }
})
function hamiyoqmi(num) {
    switch (true) {
        case (num >= 5 && num <= 30):
            ha.style.color = 'green';
            yoq.style.color = 'white';
            break;
        case (num <= 4 || num >= 31):
            yoq.style.color = 'red';
            ha.style.color = 'white';
            break;
    }
}
hayoqInput.addEventListener('keyup', function (e) {
    e.preventDefault();
    return hamiyoqmi(hayoqInput.value)
})
var clockForm = document.querySelector('#clockform');
var clockInput = document.querySelector('#clockInput');
var piyoda = document.querySelector('#natija-piyoda');
var velo = document.querySelector('#natija-velosiped');
var mashina = document.querySelector('#natija-mashina');
var samolot = document.querySelector('#natija-samolyot');
function piyodaGo(km) {
    return km / 3.6
}
function veloGo(km) {
    return km / 20.1
}
function mashinaGo(km) {
    return km / 70
}
function samolotGo(km) {
    return km / 800
}
clockForm.addEventListener('submit', function (e) {
    e.preventDefault();
    piyoda.innerHTML = piyodaGo(clockInput.value).toFixed(2);
    velo.innerHTML = Math.trunc(veloGo(clockInput.value)).toFixed(2);
    mashina.innerHTML = Math.trunc(mashinaGo(clockInput.value)).toFixed(2);
    samolot.innerHTML = Math.trunc(samolotGo(clockInput.value)).toFixed(2);
})

var headerBox = document.querySelector('#header-box');
var arow = document.querySelector('#arow');
arow.addEventListener('click', function(e) {
    e.preventDefault;
    headerBox.classList.toggle('show')
})