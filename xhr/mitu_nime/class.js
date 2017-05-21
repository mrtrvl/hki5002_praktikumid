class MituNime {
    constructor() {
        this.xhr = new XMLHttpRequest();
        this.create();
    }
    dataRead(){
        this.xhr.open("POST", "file.php", true);
        this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        this.xhr.send("eesnimi = " + encodeURI(document.getElementById("eesnimi").value) + 
                      "&perenimi = " + encodeURI(document.getElementById("perenimi").value));
        this.xhr.onreadystatechange = this.dataArrival();
    }
    dataArrival() {
        console.log(perenimi.value);
        if (this.xhr.readyState == 4){
            document.getElementById(this.result).innerHTML = this.xhr.responseText;
        }
    }
    create() {

        this.button = document.createElement("input");
        this.button.type = "button";
        this.button.value = "Tervita";
        this.button.addEventListener("click", this.dataRead.bind(this));

        this.result = document.createElement("div");
        this.result.setAttribute("id", "result");

        document.body.appendChild(this.button);
        document.body.appendChild(this.result);
    }
}