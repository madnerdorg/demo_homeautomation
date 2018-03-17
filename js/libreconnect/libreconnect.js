/*
Name:        SVG WebSocket Extenders
Author:      Remi Sarrailh
Version:     0.1 
Licence:     MIT
Description: Extends SVG objects to add websockets interactions
URL: 
*/

class LibreObject extends ReconnectingWebSocket{
    constructor(url = "wss://localhost:42001", password = false){
    
    //Websocket Settings
    super(url , null, {timeoutInterval: 10000});
    this.url = url;
    this.password = password;
    
    //SVG
    this.usb = false;
    this.text = false;
    this.alertBox = false;
    this.state = false;
    
    //ACK
    this.svg = [];
    this.lastMessage = "";
    this.sendOK = function(message){};
    //console.log(this);
}

    sendACK(data){
        console.log("Sending..." + this.state);
        if(this.state){this.send(data)};
        this.state = false;
    }

    onopen(){
        if(this.usb) {this.usb.setX(12)};
        if(this.alertBox) {this.alertBox.setOpacity(0)};
        this.state = true;
        speak("Objet connecté");
        
    }
    onerror(error){
        //console.log("error");
    }
    onclose(error){
        console.log("close");
        if(this.usb) {this.usb.setX(0)};
        if(this.alertBox) {this.alertBox.setOpacity(0.75)};
        speak("Objet déconnecté");
    }
    onmessage(message){
        if(message.data == "@password"){
            console.log("Waiting for password");
            this.send(this.password);
        } 
        this.lastMessage = message.data;
        this.sendOK(); // Callback

        if(this.text){this.text.setText(message.data)} else {
            console.log(message.data);
        }
    }
}
