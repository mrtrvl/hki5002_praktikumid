class Laohaldus {
	constructor(kihinimi, kogus){
		this.kihinimi=kihinimi;
		this.kiht=document.getElementById(kihinimi);

		this.kogus=kogus;
		window[kihinimi+"_ladu"]=this;
		this.kiht.innerHTML=
			"<canvas id='"+kihinimi+"_joonis' "+
			"width='200' height='150' "+
			"style='background-color: yellow' ></canvas><br />"+
			"<input type='button' value='&lt;' "
			+" onClick='"+kihinimi+"_ladu.v2iksemaks();' /> "+
			"<input type='text' id='"+kihinimi+"_vastus'"+
			"style='width: 50px' disabled />"+
			"<input type='button' value='&gt;' "
			+" onClick='"+kihinimi+"_ladu.suuremaks();' /> "
			+"<input type='number' id='"+kihinimi+"_step' value='1'/>";
			this.vastusekiht=document.getElementById(kihinimi+"_vastus");
			this.joonis=document.getElementById(kihinimi+"_joonis");
			
			this.kuva();
			
	}
    kuva(){
        this.vastusekiht.value=this.kogus;
        var g=this.joonis.getContext("2d");
        g.clearRect(0, 0, 200, 150);
        g.fillRect(10, 10, this.kogus, 20);
    }
    v2iksemaks(){
        this.step=parseInt(document.getElementById(this.kihinimi+"_step").value);
        this.kogus-=this.step;
        this.kuva();
        console.log(this.step);
    }
    suuremaks(){
        this.step=parseInt(document.getElementById(this.kihinimi+"_step").value);
        this.kogus+=this.step;
        this.kuva();
    }	
}