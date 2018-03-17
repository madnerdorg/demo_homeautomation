/*
Name:        SVG WebSocket Extenders
Author:      Remi Sarrailh
Version:     0.1 
Licence:     MIT
Description: Extends SVG objects to add websockets interactions
URL: 
*/

class WS_Group extends SVG_Group{
    constructor(id = "group"){
        super(id);
    }

    hello(){
        console.log("Hello World");
    }
}