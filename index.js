const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = '';
let pass2 = '';

let pass1Page = document.querySelector('#pass-1');
let pass2Page = document.querySelector('#pass-2');


function genPass() {
    if (!pass1) {
        for (let i = 0; i < 15; i++) {
            let ind1 = Math.floor(Math.random()*characters.length);
            let ind2 = Math.floor(Math.random()*characters.length);
            pass1 += characters[ind1];
            pass2 += characters[ind2];
        }
        
        console.log(pass1)
        console.log(pass2)
        
        pass1Page.textContent = pass1;
        pass2Page.textContent = pass2;
        
    }
}


