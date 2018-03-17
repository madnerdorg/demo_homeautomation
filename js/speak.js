/*
Name:        Speak
Author:      Remi Sarrailh
Version:     1.0 
Licence:     MIT
Description: Easy to use HTML5 Text 2 Speech
*/
    function speak(text, callback) {
        if(speech == "1"){
            var u = new SpeechSynthesisUtterance();
            u.text = text;
            u.lang = 'fr-FR';
            
            u.onend = function () {
                if (callback) {
                    callback();
                }
            };
            
            u.onerror = function (e) {
                if (callback) {
                    callback(e);
                }
            };
            
            speechSynthesis.speak(u);
        }
        console.log(`Vocal: ${text}`);
    }