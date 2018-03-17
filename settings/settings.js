speech = setItem("speech","0");
password = setItem("password","put_your_password_here");
radio433_url = setItem("radio433_url","wss://127.0.0.1:42002");
openlight_url = setItem("openlight_url","wss://127.0.0.1:42003");
temphum_url = setItem("temphum_url","wss://127.0.0.1:42004");

code_livingroom = [];
code_livingroom[0] = setItem("code_livingroom","0x00,0x00,0x00,0x00,0x00,0x00,0x00");
code_livingroom[1] = setItem("code_livingroom","0x00,0x00,0x00,0x00,0x00,0x00,0x00");

code_kitchen = [];
code_kitchen[0] = setItem("code_kitchen_off","/radio/text/hello");
code_kitchen[1] = setItem("code_kitchen_on","/radio/new/1234/1/on");

code_bedroom = [];
code_bedroom[0] = setItem("code_bedroom_off","/radio/old/1234");
code_bedroom[1] = setItem("code_bedroom_on","/radio/new/1234/1/5");
