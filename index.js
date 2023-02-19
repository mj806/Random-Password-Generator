const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let numbers = []
let firstRandEL = document.getElementById("randomOne-el")
let secondRandEL = document.getElementById("randomTwo-el")

    for(i = 0; i < characters.length; i++) {
        if(characters[i] < 10) {
            let randNumbers = characters[i]
        }
    }
    let firstSpecialCharacter = Math.floor( Math.random() * characters.length) + 2
    let secondSpecialCharacter = Math.floor( Math.random() * characters.length) + 2
    
    function random() {
    let randomIndex = Math.floor( Math.random() * 8) + 16
    return characters[randomIndex]
    }

    console.log( random() )

function generate() {
    let firstGenBtn = Math.floor(Math.random() * characters.length) + 16
    let secondGenBtn = Math.floor(Math.random() * characters.length) + 11
    let thirdGenBtn = Math.floor(Math.random() * characters.length) + 7
    let fourthGenBtn = Math.floor(Math.random() * characters.length) + 9
    
    firstRandEL.textContent = firstGenBtn += characters[firstSpecialCharacter] + random() + random() + secondGenBtn + random() + characters[secondSpecialCharacter] + random() + firstGenBtn + characters[firstSpecialCharacter] + random()
    
    secondRandEL.textContent = thirdGenBtn += characters[secondSpecialCharacter] + fourthGenBtn + random() + characters[firstSpecialCharacter] + characters[secondSpecialCharacter] + random() + random() + thirdGenBtn + characters[firstSpecialCharacter] + random()
}
