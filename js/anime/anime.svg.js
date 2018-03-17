/*
Name:        SVG Selectors
Author:      Remi Sarrailh
Version:     0.3 
Licence:     MIT
Description: Generate easy to use interactive objects from SVG.
URL: 
*/

const SVG_colors = {
    off:"#ccc",
    on:"#0d0",
    error:"#d00"
};

SVGDoc = [];
SVGDoc.push(SVG_colors);

function unselectableText(){
    texts = svg.getElementsByTagName('text');
    for (var i = 0; i<texts.length; i++) {
        //console.log(texts[i].style);
        texts[i].style.pointerEvents = "none";
    }
}

//Text SVG
class SVG_Text {
    constructor(id = "text"){
        this.name = id;
        this.object = svg.getElementById(id);
        this.textObject =  this.object.children[0];
        this.text = this.textObject.innerHTML;
        this.color = this.textObject.style.fill;
        SVGDoc.push(this);
    }
    
    setColor(color){
        anime({targets:this.textObject,fill: color});
        this.color = color;
    }
    
    setText(string){
        this.textObject.innerHTML = string;
        this.text = string;
    }
    
    setOpacity(value){
        anime({targets:this.text, opacity: value});
    }
}

//SVG_Group
class SVG_Group {
    constructor(id = "group",data = ""){
        this.name = id;
        this.object = svg.getElementById(id);
        this.state = false;
        this.link = false;
        this.animation = false;
        this.height = this.object.getAttribute("height");
        this.object.setAttribute("data", data);
        SVGDoc.push(this);
    }
    
    when(evt,func){
        this.object.addEventListener(evt,func);
    }

    setData(data){
        this.object.setAttribute("data",data);
    }

    getData(data){
        this.object.getAttribute("data");
    }
    

    setOpacity(value){
        anime({targets:this.object, opacity: value});
    }

    setHeight(percent){
        anime({targets:this.object, height: this.height * percent});
    }

    setX(px){
        anime({targets:this.object, translateX:px});
    }

    setY(px){
        anime({targets:this.object, translateY:px});
    }
    
    whenClicked(func){
        this.object.addEventListener("click",func);
    }
    
    setAsButton(opacity,translateY){        
        this.when("mouseover", function(){
            this.style.opacity = opacity;
        });
        
        this.when("mouseleave", function(){
            this.style.opacity = 1;
        });
        
        this.when("mousedown", function(){
            //console.log("mousedown");
            anime({targets:this,duration:300,translateY: translateY});
            
        });
        /*
        this.when("mouseup", function(){
            //console.log("mouseup");
            anime({targets:this,duration:300,translateY: 0});
        });
        */
    }
    
    setLink(url){        
        this.when("click", function(){
            window.location.href = url;
        });
    }
    
    hide(){
        this.object.style.opacity = 0;
    }

    show(){
        this.object.style.opacity = 1;
    }

    transparent(){
        this.setOpacity(0.25);
    }

    on(){
        this.state = true;
        this.setOpacity(1);
    }

    off(){
        this.state = false;
        this.setOpacity(0.25);
    }
}
