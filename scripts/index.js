let phrases = ["Welcome to Bank Saving", "Your Savings, Your Safety", "Smart Savings, Bright Tomorrows"];

let title = document.getElementById("title");

function randomizer(){
    let phrase_index = 0;
    let current_letter = 0;
    let phrase_len = phrases[phrase_index].length;
    function display_letter(){

        if (current_letter >= phrase_len){
            console.log("Reset;")
            console.log("Phrase index "+phrase_index);
            console.log("Phrases len: "+phrases.length);

            if(phrase_index == phrases.length){
                phrase_index = 0;
            } else {
                phrase_index++;
            }
            phrase_len = phrases[phrase_index].length;
            current_letter = 0;
            title.textContent = "";
        }
        title.textContent = title.textContent.slice(0, -1);
        title.textContent += phrases[phrase_index][current_letter] + "_";
        console.log(phrases[phrase_index][current_letter]);     
        current_letter++;
    }
    let displayInterval = setInterval(display_letter, 200);
}

randomizer();
