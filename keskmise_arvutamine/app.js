class Calculator {
    constructor() {
        this.numbers = [];
        this.fieldButton = document.createElement("input");
        this.fieldButton.type = "button";
        this.fieldButton.value = "Lisab välja";
        this.fieldButton.addEventListener("click", this.addField.bind(this));
        document.querySelector("#content").appendChild(this.fieldButton);

        this.avgButton = document.createElement("input");
        this.avgButton.type = "button";
        this.avgButton.value = "Arvutab keskmise";
        this.avgButton.addEventListener("click", this.calculate.bind(this));
        document.querySelector("#content").appendChild(this.avgButton);
    }
    
    calculate() {
        this.sum = 0;
        console.log(this.numbers);
        this.numbers.forEach(
            function(field) {
                this.sum += this.field.value;
            }
            ,this);
        this.avg = this.sum / this.numbers.length;
        this.result.innerHTML = "Keskmine: " + this.avg;
    }
}
window.onload = () => {
    new Calculator();
};