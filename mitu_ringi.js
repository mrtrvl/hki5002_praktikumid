class LeCalculator {
    constructor(layername) {
        this.layerName = layername;
        this.layer = document.getElementById(layername);
        window[layername+"_calculator"] = this;
        this.layer.innerHTML=
        "Raadius: <input type='text' id='"+layername+"_box' /> "+
        "<input type='button' value='Pindala' id='calc_" + layername + "' " +
        "onClick='"+layername+"_calculator.calculate();' />" +
        "<div id='"+layername+"_result'></div>";
        this.box = document.getElementById(layername+"_box");
        this.resultlayer = document.getElementById(layername+"_result");
        
        //document.getElementById('calc_' + layername).addEventListener('click', this.calculate);
    }
    calculate() {
        //console.log("kuku:" + document.getElementById("_calculator"));
        //var box = document.getElementById(this.layerName + "_box");
        this.resultlayer.innerHTML = parseFloat(this.box.value)*parseFloat(this.box.value)*Math.PI;
    }	
}
/*			function Calculator(layername){
        this.start = function(){
            this.layer = document.getElementById(layername);
            window[layername+"_calculator"] = this;
            this.layer.innerHTML =
            "Raadius: <input type='text' id='"+layername+"_box' /> "+
            "<input type='button' value='Pindala' "+
            "onClick='"+layername+"_calculator.calculate();' /> "+
            "<div id='"+layername+"_result'></div>";
            this.box=document.getElementById(layername+"_box");
            this.resultlayer=document.getElementById(layername+"_result");
        }
        this.calculate = function(){	
            
        }
        this.start();
    }*/
function begin() {
    new LeCalculator("layer1");
    new LeCalculator("layer2");
    new LeCalculator("layer3");
}