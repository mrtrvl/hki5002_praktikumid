addField() {
        var field = document.createElement("input");
        var linebreak = document.createElement("br");
        var result = document.createElement("span");
        this.field = field;
        this.result = result;
        field.type = "number";
        field.setAttribute("id", "number");
        field.setAttribute("placeholder", "sisestab numbri");
        document.querySelector("#content").appendChild(linebreak);
        document.querySelector("#content").appendChild(this.field);
        document.querySelector("#content").appendChild(linebreak);
        document.querySelector("#content").appendChild(this.result);

        this.input = this.field.value;
        this.numbers.push(this.field.value);
    
}