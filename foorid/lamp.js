window.onload = () => {
    var lamp = new Lamp();
    result = document.createElement("span");
    result.innerHTML = lamp.checkState();
    linebreak = document.createElement("br");
    document.querySelector("#content").appendChild(result);
    document.querySelector("#content").appendChild(linebreak);
    
    result2 = document.createElement("span");
    result2.innerHTML = lamp.changeState(false);
    document.querySelector("#content").appendChild(result2);
};
class Lamp {
    constructor() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", "content");
        this.state = true;
        document.body.appendChild(this.element);
    }
    checkState() {
        if (this.state == true) {
            return "Lamp is lit";
        }
        if (this.state == "lit") {
            return "Lamp is lit";
        }
    }
    changeState(state) {
        this.state = state;
        if (state == false) {
            return "Lamp is not lit";
        }
    }

}