window.onload = () => {
    new Lamp("lamp1");
    new Lamp("lamp2");
    new Lamp("oneMoreLamp");
}

class Lamp {
    constructor(lampID) {
        this.state = false;
        this.element = document.createElement("div");
        this.element.setAttribute("id", lampID);

        this.onButton = document.createElement("input");
        this.onButton.type = "button";
        this.onButton.value = "On"
        this.onButton.addEventListener("click", this.turnOn.bind(this));

        this.offButton = document.createElement("input");
        this.offButton.type = "button";
        this.offButton.value = "Off"
        this.offButton.addEventListener("click", this.turnOff.bind(this));

        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", lampID + "_kanvas");
        this.canvas.setAttribute("height", "100");
        this.canvas.setAttribute("width", "100");
        this.canvas.setAttribute("style", "background-color: white");

        document.body.appendChild(this.element);

        document.querySelector(`#${lampID}`).appendChild(this.canvas);
        document.querySelector(`#${lampID}`).appendChild(this.onButton);
        document.querySelector(`#${lampID}`).appendChild(this.offButton);

        this.lamp = document.getElementById(lampID + "_kanvas");

        var ctx = this.lamp.getContext("2d");
        ctx.clearRect(0, 0, 100, 100);
        ctx.beginPath();
        ctx.arc(50, 50, 25, 0, 2*Math.PI);
        ctx.stroke();
    }
    turnOn() {
        var ctx = this.lamp.getContext("2d");
        ctx.beginPath();
        ctx.arc(50, 50, 25, 0, 2*Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
    turnOff() {
        var ctx = this.lamp.getContext("2d");
        ctx.clearRect(0, 0, 100, 100);
        ctx.beginPath();
        ctx.arc(50, 50, 25, 0, 2*Math.PI);
        ctx.fillStyle = "black";
        ctx.stroke();
    }
}