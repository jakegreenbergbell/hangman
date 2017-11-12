function setUpVars() {
    easyWords = [ "dude",    "truck",   "soccer", "purple", "adult", "album", "alphabet", "apple", "apple", +
        "balloon", "banana",   "bathtub", "bottle",  "button", "clown",  "clown",  "dress",  "elephant", +
        "eraser", "family", "garden",   "hammer",   "passport", "pebble",  "school"];
    mediumWords = ["angel", "flower", "absurd","weird", "jazz","airplane", "airport", "backpack", "bathroom", +
        "chocolate","diamond", "festival", "freeway", "fungus","knife", "guitar", "kitchen","library", "magnet", +
        "maze","necklace","television", "toilet", "torpedo", "parachute"];
    hardWords = ["awesome", "ridiculous", "fluorescent", "tranquilizer", "disgusting", "barbecue", "crystal", +
        "cappuccino","butterfly", "electricity","explosive","gemstone", "gloves","kaleidoscope","meteor", +
        "microscope", "milkshake", "monster", "mosquito","pendulum", "pyramid", "satellite", "signature", +
        "skeleton", "surveyor", "vacuum", "vampire", "vulture"];
    wordPlaceInArray = Math.floor(Math.random() * 24);
}

function findWord(level){
    word = "" ;
    var underscores = "This is the word: ";
    switch (level) {
        case "easyWords":
            word = easyWords[wordPlaceInArray];
            for(var i = 0; i < word.length; i++){
                underscores += "____   ";
            }
            document.getElementById("underscores").innerHTML = underscores;
            break;
        case "mediumWords":
            word = mediumWords[wordPlaceInArray];
            for(var i = 0; i < word.length; i++){
                underscores += "____   ";
            }
            document.getElementById("underscores").innerHTML = underscores;
            break;
        case "hardWords":
            word = hardWords[wordPlaceInArray];
            for(var i = 0; i < word.length; i++){
                underscores += "____   ";
            }
            document.getElementById("underscores").innerHTML = underscores;
    }
    console.log(word);
}

function makeAGuess(){
    var letterGuess = document.getElementById("selectLetter").value;
    console.log(letterGuess);
    var isItThere;
    for(var i = 0; i < word.length; i ++){
        if(letterGuess == word[i]){
            isItThere = true;
            popLetter(i,letterGuess);
            document.getElementById("underscores").innerHTML[i] = letterGuess;

            break;
        } else{
            isItThere = false;
        }

    }

}

function popLetter(location, letter){
    var underscores = "This is the word: ";
    for(var i = 0; i < word.length; i++){
        if (i == location){
            underscores += "  " + letter + "  ";
        }else{
            underscores += "____   ";
        }
    }
    document.getElementById("underscores").innerHTML = underscores;

}