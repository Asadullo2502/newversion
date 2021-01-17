var mashinaForm = document.querySelector('#mashinaform');
var mashinaInput = document.querySelector('#carname');
var brand = 'Chevrolet';
function mashinaPlus (mashinaravno) {
    return brand + " " + mashinaravno;
}
mashinaForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    alert(mashinaPlus(mashinaInput.value))
})
var btn = document.querySelector('#peoplebtn');
var peopleinput = document.querySelector('#peoplename');
var peopleinput1 = document.querySelector('#peoplsurename');
btn.addEventListener('click', function(e) {
    console.log(peopleinput1.value);
    alert(`Salom ${peopleinput1.value} ${peopleinput.value}`)
})
var clockInput = document.querySelector('#clock');
var minut = document.querySelector('#minut');
var number = 60;
function clockminute() {
    return clockInput.value * number;
}
clockInput.addEventListener('keyup', function(e) {
    e.preventDefault();
    minut.innerHTML = clockminute(clockInput.value)    
})
var gradusForm = document.querySelector('#gradusform');
var gradusInput = document.querySelector('#gradus');
var gradusSelect = document.querySelector('#gradus-select');
var gradusHolder = document.querySelector('#gradus-holder');
function selsiToFaradey(gradus) {
    return (gradus * 9/5) + 32;
}
function selsiToKelvin(gradus) {
    return gradus + 273;
}
function universal() {
    var tempVal = parseInt(gradusInput.value);
    if(gradusSelect.value == 'fahrenheit') {
        gradusHolder.innerHTML = selsiToFaradey(tempVal);
    }else {
        gradusHolder.innerHTML = selsiToKelvin(tempVal);
    }
}
gradusInput.addEventListener('keyup', function(e) {
    e.preventDefault();
    universal();
})
gradusInput.addEventListener('change', function() {
    universal();
})
gradusSelect.addEventListener('change', function() {
        universal();
})

var kvadratInput = document.querySelector('#kvadrat');
var kvad = document.querySelector('#kvad');
var kubi = document.querySelector('#kubi');

    function kankulator(num) {
    return num**2
}
    function kankulator2(num) {
        return num ** 3
    }
kvadratInput.addEventListener('keyup', function(e) {
    e.preventDefault();

    kvad.innerHTML = kankulator(kvadratInput.value);
    kubi.innerHTML = kankulator2(kvadratInput.value);
    
})
var kursForm = document.querySelector('#kurs-form');
var kursInput = document.querySelector('#kurs-input');
var kursSelect = document.querySelector('#kurs-select');
var kursNatija = document.querySelector('#natija-som');
function dollarToSom(money) {
    return money * kursSelect.value
}
kursForm.addEventListener('submit', function(e) {
    e.preventDefault();
    kursNatija.innerHTML = dollarToSom(kursInput.value)
})
kursSelect.addEventListener('change', function() {
    kursNatija.innerHTML = dollarToSom(kursInput.value)
})
var matemForm = document.querySelector('#matem2-form');
var matem2Input = document.querySelector('#matem2-input');
var matem2Holder = document.querySelector('#matem2-holder');
function canculatorTo3(num) {
    if (matem2Input.value % 3 == 0 && matem2Input.value % 5) {
        matem2Holder.innerHTML = 'FizzBuzz'
    }else if(matem2Input.value % 3 == 0) {
        matem2Holder.innerHTML = 'Fizz'
    }else if(matem2Input.value % 5 == 0) {
        matem2Holder.innerHTML = 'Buzz'
    }
}
matem2Input.addEventListener('keyup', function(e) {
    e.preventDefault();
    if (matem2Input.value % 3 == 0 && matem2Input.value % 5 == 0) {
        matem2Holder.innerHTML = 'FizzBuzz'
    }else if(matem2Input.value % 3 == 0) {
        matem2Holder.innerHTML = 'Fizz'
    }else if(matem2Input.value % 5 == 0) {
        matem2Holder.innerHTML = 'Buzz'
    }else {
        matem2Holder.innerHTML = 'no no no'
    }
})

















    
    















