function setUpVars() {
    easyWords = [ "DUDE",    "TRUCK",   "SOCCER", "PURPLE", "ADULT", "ALBUM", "ALPHABET", "APPLE", "APPLE", +
        "BALLOON", "BANANA",   "BATHTUB", "BOTTLE",  "BUTTON", "CLOWN",  "BOMB",  "DRESS",  "ELEPHANT", +
        "ERASER", "FAMILY", "GARDEN",   "HAMMER",   "PASSPORT", "PEBBLE",  "SCHOOL"];
    mediumWords = ["ANGEL", "FLOWER", "ABSURD","WEIRD", "JAZZ","AIRPLANE", "AIRPORT", "BACKPACK", "BATHROOM", +
        "CHOCOLATE","DIAMOND", "FESTIVAL", "FREEWAY", "FUNGUS","KNIFE", "GUITAR", "KITCHEN","LIBRARY", "MAGNET", +
        "MAZE","NECKLACE","TELEVISION", "TOILET", "TORPEDO", "PARACHUTE"];
    hardWords = ["AWESOME", "RIDICULIOUS", "FLUORESCENT", "TRANQUILIZER", "DISGUSTING", "BARBECUE", "CRYSTAL", +
        "CAPPUCCINO","BUTTERFLY", "ELECTRICITY","EXPLOSIVE","GEMSTONE", "GLOVES","KALEIDOSCOPE","METEOR", +
        "MICROSCOPE", "MILKSHAKE", "MONSTER", "MOSQUITO","PENDULUM", "PYRAMID", "SATELLITE", "SIGNATURE", +
        "SKELETON", "SURVEYOR", "VACUUM", "VAMPIRE", "VULTURE"];
    wordPlaceInArray = Math.floor(Math.random() * 24);
    output = [];
    word = [];
    letterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"];
    incorrectGuesses = [];
}

function findWord(level){
    var underscores = "";
    switch (level) {
        case "easyWords":
            word = easyWords[wordPlaceInArray];


        case "mediumWords":
            word = mediumWords[wordPlaceInArray];


        case "hardWords":
            word = hardWords[wordPlaceInArray];
    }
    for(var i = 0; i < word.length; i++) {
        output.push("_ ");
    }
    var outputFinal = output.join();
    document.getElementById("underscores").innerHTML = outputFinal.replace(/,/g, "");
    console.log(word);
}

function makeAGuess() {
    var letterGuess = document.getElementById("selectLetter").value;
    console.log(letterGuess);
    var guessArray = [];
    removeLetter(letterGuess);
    if(word.includes(letterGuess) != true){
        incorrectGuesses.push(letterGuess);
        console.log(incorrectGuesses);
        document.getElementById("incorrectGuesses").innerHTML = "INCORRECT LETTERS: " + incorrectGuesses;
    }
    for (var i = 0; i < word.length; i++) {
        if (letterGuess == word[i]) {
            guessArray[i] = true;
        } else {
            guessArray[i] = false;
        }

    }
    pushToHTML(guessArray, letterGuess);
}

function pushToHTML(arrayOfGuesses, guess){
    for(var i = 0; i < arrayOfGuesses.length; i++){
            if(arrayOfGuesses[i]){
                output[i] = guess;
            }
    }
    var outputFinal = output.join();
    document.getElementById("underscores").innerHTML = outputFinal.replace(/,/g, "");
}

function removeLetter(letter){
    var letterBox = document.getElementById("selectLetter");
    letterBox.remove(letterBox.selectedIndex);
}
