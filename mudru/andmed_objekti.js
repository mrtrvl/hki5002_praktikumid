function Laohaldus(kihinimi, kogus){
    this.algus=function(){
        this.kiht=document.getElementById(kihinimi);
        this.kogus=kogus;
        window[kihinimi+"_ladu"]=this;
        this.kiht.innerHTML=
        "<input type='button' value='&lt;' "+
        "onClick='"+kihinimi+"_ladu.v2iksemaks();' /> "+
        "<input type='text' id='"+kihinimi+"_vastus' "+
        "style='width: 50px' disabled />"+
        "<input type='button' value='&gt;' "+
        " onClick='"+kihinimi+"_ladu.suuremaks();' /> ";
        this.vastusekiht=document.getElementById(kihinimi+"_vastus");
        this.kuva();
    }
    this.kuva=function(){
        this.vastusekiht.value=this.kogus;
    }
    this.v2iksemaks=function(){
        this.kogus--;
        this.kuva();
    }
    this.suuremaks=function(){
        this.kogus++;
        this.kuva();
    }
    this.algus();
}

function lehealgus(){
    new Laohaldus("kiht1", 100);
    new Laohaldus("kiht2", 50);
}