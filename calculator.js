// class Calculator {

//     constructor(LayerName) {
//         this.layer = document.getElementById(layerName);
//         window[layerName + "_calculator"] = this;
//         this.layer.innerHTML = 
//             "Tollid: <input type='text' id='" + layerName + "_kast'>" +
//             "<input type='button' value='arvutab'" + 
//             "onClick='" + layerName + "_calculator.calculate();'>" +
//             "<div id='" + layerName + "_response'></div>";
//         this.box = document.getElementById(layerName + "_box");
//         this.responseArea = document.getElementById()
//     }
// }

class LeCalculator {
    constructor(layername) {
        this.layerName = layername;
        this.layer = document.getElementById(layername);
        window[layername+"_calculator"] = this;
 		this.layer.innerHTML=
 			"Raadius: <input type='text' id='"ˇ+ layername + "_box' /> "+
 			"<input type='button' value='Pindala' id='calc_" + layername + "' " +
 			"onClick='"+layername+"_calculator.calculate();' />" +
 			"<div id='"+layername+"_result'></div>";
 			this.box = document.getElementById(layername+"_box");
 			this.resultlayer = document.getElementById(layername+"_result");
 			
 			//document.getElementById('calc_' + layername).addEventListener('click', this.calculate);
 	}
 	calculate(){
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
function begin(){
    console.log("BEGIN is working");
    new LeCalculator("layer1");
    new LeCalculator("layer2");
    new LeCalculator("layer3");
}