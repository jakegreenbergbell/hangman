function setUpVars() {
    easyWords = [ "DUDE",    "TRUCK",   "SOCCER", "PURPLE", "ADULT", "ALBUM", "ALPHABET", "APPLE", "APPLE",
        "BALLOON", "BANANA",   "BATHTUB", "BOTTLE",  "BUTTON", "CLOWN",  "BOMB",  "DRESS",  "ELEPHANT",
        "ERASER", "FAMILY", "GARDEN",   "HAMMER",   "PASSPORT", "PEBBLE",  "SCHOOL"];
    mediumWords = ["ANGEL", "FLOWER", "ABSURD","WEIRD", "JAZZ","AIRPLANE", "AIRPORT", "BACKPACK", "BATHROOM",
        "CHOCOLATE","DIAMOND", "FESTIVAL", "FREEWAY", "FUNGUS","KNIFE", "GUITAR", "KITCHEN","LIBRARY", "MAGNET",
        "MAZE","NECKLACE","TELEVISION", "TOILET", "TORPEDO", "PARACHUTE"];
    hardWords = ["AWESOME", "RIDICULIOUS", "FLUORESCENT", "TRANQUILIZER", "DISGUSTING", "BARBECUE", "CRYSTAL",
        "CAPPUCCINO","BUTTERFLY", "ELECTRICITY","EXPLOSIVE","GEMSTONE", "GLOVES","KALEIDOSCOPE","METEOR",
        "MICROSCOPE", "MILKSHAKE", "MONSTER", "MOSQUITO","PENDULUM", "PYRAMID", "SATELLITE", "SIGNATURE",
        "SKELETON", "SURVEYOR", "VACUUM", "VAMPIRE", "VULTURE"];
    output = [];
    word = [];
    letterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"];
    incorrectGuesses = [];
}

function findWord(level){
    var submitButton = document.getElementById("makeGuess");
    submitButton.disabled = false;
    incorrectGuesses = [];
    var wordPlaceInArray = Math.floor(Math.random() * 24);
    word = '';
    output = [];
    var easyBtn = document.getElementById("level1");
    var mediumBtn = document.getElementById("level2");
    var hardBtn = document.getElementById("level3");
    switch (level) {
        case "easyWords":
            word = easyWords[wordPlaceInArray];
            break;
        case "mediumWords":
            word = mediumWords[wordPlaceInArray];
            break;
        case "hardWords":
            word = hardWords[wordPlaceInArray];
            break;
    }
    easyBtn.disabled = true;
    mediumBtn.disabled = true;
    hardBtn.disabled = true;

    for(var i = 0; i < word.length; i++) {
        output.push("_ ");
    }
    var outputFinal = output.join();
    document.getElementById("border").style.display = "block";
    document.getElementById("underscores").innerHTML = outputFinal.replace(/,/g, "");
    console.log(word);
}

function makeAGuess() {
    var letterGuess = document.getElementById("selectLetter").value;
    console.log(letterGuess);
    removeLetter(letterGuess);
    incorrectLetter(letterGuess);
    for (var i = 0; i < word.length; i++) {
        if (letterGuess == word[i]) {
            output[i] = letterGuess.fontcolor("green");
        }
    }
        var outputFinal = output.join();
    if (outputFinal.includes("_") == false){
        winnerWinner();
    }
    document.getElementById("underscores").innerHTML = outputFinal.replace(/,/g, "");

}
function winnerWinner(){
    var submitButton = document.getElementById("makeGuess");
    document.getElementById("loserOrWinner").innerHTML= "YOU WON THE GAME!";
    document.getElementById("loserOrWinner").style.color = "green";
    submitButton.disabled = true;
}
function incorrectLetter(letterGuess) {
    var submitButton = document.getElementById("makeGuess");
    if(word.includes(letterGuess) != true){
        incorrectGuesses.push(letterGuess);
        console.log(incorrectGuesses);
        var hangmanAmount = incorrectGuesses.length;
        document.getElementById("hungMan").innerHTML = "<image src = 'img/" + "hangman" + hangmanAmount + ".png' " +
            "width='20%' height='20%'>";
        if(hangmanAmount == 7){
            document.getElementById("loserOrWinner").innerHTML = "YOU LOST THE GAME! THE WORD WAS: " + word;
            submitButton.disabled = true;
        }
        document.getElementById("incorrectGuesses").innerHTML = "INCORRECT LETTERS: " + incorrectGuesses;

    }
}

function removeLetter(){
    var letterBox = document.getElementById("selectLetter");
    letterBox.remove(letterBox.selectedIndex);
}

function playAgain(){
    document.getElementById("underscores").innerHTML = "";
    document.getElementById("incorrectGuesses").innerHTML = "INCORRECT GUESSES:";
    document.getElementById("hungMan").innerHTML = "";
    document.getElementById("loserOrWinner").innerHTML = "";
    var easyBtn = document.getElementById("level1");
    var mediumBtn = document.getElementById("level2");
    var hardBtn = document.getElementById("level3");
    var submitButton = document.getElementById("makeGuess");
    easyBtn.disabled = false;
    mediumBtn.disabled = false;
    hardBtn.disabled = false;
    document.getElementById("selectLetter").innerHTML =
        "<option value=\"A\">A</option>\n" +
        "            <option value=\"B\">B</option>\n" +
        "            <option value=\"C\">C</option>\n" +
        "            <option value=\"D\">D</option>\n" +
        "            <option value=\"E\">E</option>\n" +
        "            <option value=\"F\">F</option>\n" +
        "            <option value=\"G\">G</option>\n" +
        "            <option value=\"H\">H</option>\n" +
        "            <option value=\"I\">I</option>\n" +
        "            <option value=\"J\">J</option>\n" +
        "            <option value=\"K\">K</option>\n" +
        "            <option value=\"L\">L</option>\n" +
        "            <option value=\"M\">M</option>\n" +
        "            <option value=\"N\">N</option>\n" +
        "            <option value=\"O\">O</option>\n" +
        "            <option value=\"P\">P</option>\n" +
        "            <option value=\"Q\">Q</option>\n" +
        "            <option value=\"R\">R</option>\n" +
        "            <option value=\"S\">S</option>\n" +
        "            <option value=\"T\">T</option>\n" +
        "            <option value=\"U\">U</option>\n" +
        "            <option value=\"V\">V</option>\n" +
        "            <option value=\"W\">W</option>\n" +
        "            <option value=\"X\">X</option>\n" +
        "            <option value=\"Y\">Y</option>\n" +
        "            <option value=\"Z\">Z</option>";
}
