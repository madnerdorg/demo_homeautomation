/*
Name:        SVG RadioSignal Animation
Author:      Remi Sarrailh
Version:     0.2 
Licence:     MIT
Description: An animate radio signal animation depends on anime.svg.js
URL: 
*/

class SVG_RadioSignal {
    constructor(id = "wifi_icon"){
        this.name = id;
        this.object = svg.getElementById(id).children;
        this.state = false;
        this.animation = anime.timeline({autoplay: false, loop: true});
        this.animation
        .add({
            targets:this.object[3], translateX: 1, opacity:0, duration: 1000
        })
        .add({
            targets:this.object[2], translateX: 1, opacity:0, duration: 1000, offset: 500
        })
        .add({
            targets:this.object[1], translateX: 1, opacity:0, duration: 1000, offset: 1000
        });
        
        for (let index = 1; index < 4; index++){
            this.object[index].style.opacity = 0;
        }
        
        SVGDoc.push(this);
    }
    
    on() {
        this.state = true;
        for (let index = 0; index < 4; index++){
            anime({targets:this.object[index].children[0],stroke: SVG_colors.on});
        }
        for (let index = 1; index < 4; index++){
            this.object[index].style.opacity = 1;
        }
        this._startAnimation();
    }
    
    off() {
        for (let index = 0; index < 4; index++){
            anime({targets:this.object[index].children[0],stroke: SVG_colors.off});
        }
        for (let index = 1; index < 4; index++){
            anime({targets:this.object[index],opacity:0});
        }
        this.state = false;
        this._stopAnimation();
    }
    
    _startAnimation() {
        this.animation.play();
    }
    
    _stopAnimation() {
        this.state = false;
        this.animation.restart();
        this.animation.pause();
    }
}

class SVG_RPi {

}
