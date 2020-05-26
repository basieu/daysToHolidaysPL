function getDayFromNumber(dayNumber) { // giving Polish names of days of the week
    var days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

    return days[dayNumber];
}

window.onload = function () {
    const select = document.getElementById("select");
    const check = document.getElementById("check");
    const result = document.getElementById("result");
    const data = document.getElementById("data");
    const bot = document.getElementById("bot");
    
    var today = new Date();
    data.innerHTML += getDayFromNumber(today.getDay()) + ", " + today.toLocaleDateString() + "r.";

    var klasa = document.createElement("select");

    select.addEventListener('change', function(){
        if (this.value == "sp"){ // adding a specific number of classes
            klasa.innerHTML = ' ';
            for (i = 0; i < 8; i++){
                var y = document.createElement("option");
                y.innerText = i+1;
                klasa.appendChild(y);
            }
        } else if (this.value == "tech"){
            klasa.innerHTML = ' ';
            for (i = 0; i < 4; i++){
                var y = document.createElement("option");
                y.innerText = i+1;
                klasa.appendChild(y);
            }
        } else if (this.value == "lo") {
            klasa.innerHTML = ' ';
            for (i = 0; i < 3; i++){
                var y = document.createElement("option");
                y.innerText = i+1;
                klasa.appendChild(y);
            }
        } 
        result.innerText = "Klasa: "
        result.appendChild(klasa);
    })

    check.addEventListener('click', function(){
        var odd = document.createElement("div");
        bot.innerHTML = ' ';
        if ((select.value == "tech" && klasa.value == "4") || (select.value == "lo" && klasa.value == "3")) {
            var maturaEnd = new Date(2020, 3, 24);
            var a = Math.floor((today.getTime() - maturaEnd.getTime())/(1000*60*60*24));
            odd.innerText = "Maturzysto! Twój rok szkolny zakończył się " + a + " dni temu. Powodzenia na maturze!";
        } else if (select.value == "sp" || (select.value == "lo" && klasa.value == "1")
                    || (select.value == "lo" || klasa.value == "2") || (select.value == "tech" && klasa.value == "1")
                    || (select.value == "tech" && klasa.value == "2") || (select.value == "tech" && klasa.value == "3")) {
            // ^ prevents the result being displayed when the first field isn't selected
            var endYear = new Date(2020, 5, 26);
            var a = Math.ceil((endYear.getTime() - today.getTime())/(1000*60*60*24));
            if (a > 1) {
                var b = "dni";
            } else {
                var b = "dzień";
            }
            odd.innerText = "Twój rok szkolny zakończy się za " + a + " " + b + ".";
        }
        bot.appendChild(odd);
    });

};