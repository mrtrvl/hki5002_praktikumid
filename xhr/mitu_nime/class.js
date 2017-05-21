class MituNime {
    constructor() {
        this.xhr = new XMLHttpRequest();
        this.create();
    }
    dataRead(){
        this.xhr.open("POST", "file.php", true);
        this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        this.xhr.send("firstname = " + encodeURI(this.firstname.value) + 
                      "&lastname = " + encodeURI(this.lastname.value));
        this.xhr.onreadystatechange = this.dataArrival();
    }
    dataArrival() {
        console.log(this.xhr.readyState);
        if (this.xhr.readyState == 4){
            document.getElementById(this.result).innerHTML = this.xhr.responseText;
        }
    }
    create() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", "layer");

        this.button = document.createElement("input");
        this.button.type = "button";
        this.button.value = "Tervita";
        this.button.addEventListener("click", this.dataRead.bind(this));

        this.result = document.createElement("div");
        this.result.setAttribute("id", "result");

        this.firstname = document.createElement("input");
        this.firstname.type = "input";
        this.firstname.setAttribute("placeholder", "eesnimi");
        this.firstname.setAttribute("id", "firstname");
        this.lastname = document.createElement("input");
        this.lastname.type = "input";
        this.lastname.setAttribute("placeholder", "perenimi");
        this.lastname.setAttribute("id", "lastname");

        document.body.appendChild(this.element);

        document.querySelector("#layer").appendChild(this.firstname);
        document.querySelector("#layer").appendChild(this.lastname);
        document.querySelector("#layer").appendChild(this.button);
        document.querySelector("#layer").appendChild(this.result);
    }
}