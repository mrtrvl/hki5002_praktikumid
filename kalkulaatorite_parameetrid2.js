class LeCalculator {
    constructor(layer, label, button, coef) {

        this.element = document.createElement("div");
        this.element.setAttribute("id", layer + "_calculator");
        this.label = document.createTextNode(label);

        this.box = document.createElement("input");
        this.box.type = "text";

        this.button = document.createElement("input");
        this.button.type = "button";
        this.button.value = button;
        this.button.addEventListener("click", this.calculate.bind(this));

        this.result = document.createElement("span");
        this.result.setAttribute("id", layer + "_result");

        document.querySelector("#content").appendChild(this.element);

        this.element.appendChild(this.label);
        this.element.appendChild(this.box);
        this.element.appendChild(this.button);
        this.element.appendChild(this.result);
        this.coef = coef;

    }
    calculate() {
        this.input =  parseFloat(this.box.value);
        this.calculated = this.input * this.coef;
        this.result.innerHTML = this.calculated;
    }
}
function start() {
    new LeCalculator("layer1","Eurod", "Dollariteks", 1.3);
    new LeCalculator("layer2","Tollid", "Sentimeetriteks", 2.54);
    new LeCalculator("layer3", "Letihind: ", "Käibemaks", 0.16);
}
/* Üritasin ülemist tööle panna, ei saanud lõpuni jagu, kui aega leiab, siis uurib ehk uuesti */

// class LeCalculator {
//     constructor(layername, label, button, coef) {
//         this.layername = layername;
//         this.layer = document.getElementById(layername);
//         window[layername + "_calculator"] = this;
//         this.layer.innerHTML =
//         label + ": <input type='text' id='" + layername + "_box'>"+
//         "<input type='button' value='" + button + "' onClick='" + layername + "_calculator.calculate();'>"+
//         "<span id='"+layername+"_result'></span>";
//         this.box = document.getElementById(layername + "_box");
//         this.resultlayer = document.getElementById(layername + "_result");
//         this.coef = coef;
//     }
//     calculate() {
//         this.resultlayer.innerHTML = parseFloat(this.box.value) * this.coef;
//     }
// }
// function start() {
//     new LeCalculator("layer1","Eurod", "Dollariteks", 1.3);
//     new LeCalculator("layer2","Tollid", "Sentimeetriteks", 2.54);
// }
