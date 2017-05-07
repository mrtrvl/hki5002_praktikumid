class Foor {
    constructor() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", "vastus");
        this.tuli = "roheline";
        this.kysiTuli = function() {
            return this.tuli;
        }
        this.muudaTuli = function(uusTuli) {
            this.tuli = uusTuli;
        }
        document.querySelector("#vastus").appendChild(this.element);
    }
}
function leheAlgus() {
    var f1 = new Foor();
    console.log(f1.kysiTuli());
    f1.muudaTuli("kollane");
    result = document.createElement("span");
    result.innerHTML = f1.kysiTuli();
    document.querySelector("#vastus").appendChild(result);
}

function leheAlgus2() {
    var f1 = new Foor();
    var f2 = new Foor();
    f1.muudaTuli("kollane");
    f2.muudaTuli("punane");
    result = document.createElement("span");
    result.innerHTML = "esimene: " + f1.kysiTuli() + ", teine: " + f2.kysiTuli();
    document.querySelector("#vastus").appendChild(result);
}