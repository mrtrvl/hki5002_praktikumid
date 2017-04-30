// class LeCalculator {
//     constructor(layer, label, button, coef) {

//         window[layer + "_calculator"] = this;
//         var convertable = document.createElement("span");
//         var conv_txt = document.createTextNode(label);
//         convertable.appendChild(conv_txt);

//         var conv_value = document.createElement("input");
//         conv_value.setAttribute("id", label + "_box");
//         conv_value.setAttribute("value", "3");

//         var btn = document.createElement("button");
//         btn.setAttribute("onClick", layer + "_calculator.calculate();");
//         var btnlbl = document.createTextNode(button);
//         btn.appendChild(btnlbl);

//         var linebreak = document.createElement("br");

//         var resultspan = document.createElement("span");
//         this.resultspan = resultspan;

//         document.body.appendChild(convertable);
//         document.body.appendChild(conv_value);
//         document.body.appendChild(btn);
//         document.body.appendChild(resultspan);
//         document.body.appendChild(linebreak);

//         this.coef = coef;
//         this.conv_value = document.getElementById(label + "_box").value;
//         console.log(this.conv_value);
//     }
//     calculate() {
//         var result = parseFloat(this.conv_value) * this.coef;
//         var resultvalue = document.createTextNode(result);
//         var linebreak = document.createElement("br");
//         // console.log(this.conv_value);
//         this.resultspan.appendChild(resultvalue);
//     }
// }

/* Üritasin ülemist tööle panna, ei saanud lõpuni jagu, kui aega leiab, siis uurib ehk uuesti */

class LeCalculator {
    constructor(layername, label, button, coef) {
        this.layername = layername;
        this.layer = document.getElementById(layername);
        window[layername + "_calculator"] = this;
        this.layer.innerHTML =
        label + ": <input type='text' id='" + layername + "_box'>"+
        "<input type='button' value='" + button + "' onClick='" + layername + "_calculator.calculate();'>"+
        "<span id='"+layername+"_result'></span>";
        this.box = document.getElementById(layername + "_box");
        this.resultlayer = document.getElementById(layername + "_result");
        this.coef = coef;
    }
    calculate() {
        this.resultlayer.innerHTML = parseFloat(this.box.value) * this.coef;
    }
}
function start() {
    new LeCalculator("layer1","Eurod", "Dollariteks", 1.3);
    new LeCalculator("layer2","Tollid", "Sentimeetriteks", 2.54);
}
