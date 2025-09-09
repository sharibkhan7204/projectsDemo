let inputBox = document.querySelector("#inputBox");
let button = document.querySelector("button");
let outputBox = document.querySelectorAll(".outputBox");
let lableline = document.querySelector(".labelLine")

button.addEventListener("click", () => {
    const str = inputBox.value.trim();
    outputBox[0].textContent = "Length : " + str.length;

    
    outputBox[1].textContent = "Uppercase : " + str.toUpperCase();

    outputBox[2].textContent = "Lowercase : " + str.toLowerCase();

    let middleChar;
    if (str.length % 2 === 0) {
        middleChar = str[str.length / 2 - 1] + str[str.length / 2];
    } else {
        middleChar = str[Math.floor(str.length / 2)];
    }
    outputBox[3].textContent = "MiddleChar : " + middleChar;

    let word = str.split(" ").filter(word => word !== "");
    //hujgjahfjashdfjshdjfhd
    let count = word.length;
    outputBox[4].textContent = "TotalWords : " + word.length;


    let vowel = str.match(/[aieouAEIOU]/g);
    if (vowel) {
        outputBox[5].textContent = `Vowels : ${vowel.join(", ")} (${vowel.length})`;
        
    } else {
        outputBox[5].textContent = "Vowels : None";
    }

    
    let consonent = str.match(/[bcdegfghjklmnpqrsrvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
    if (consonent) {
        outputBox[6].textContent = `Consonents : ${consonent.join(", ")} (${consonent.length})`;
    } else {
        outputBox[6].textContent = "Consonents : None";
    }


    let camelCase ="";

    for(let i = 0; i < word.length; i++)
    {
        if(i === 0)
        {
            camelCase = word[i].toLowerCase();
        }else{
            let firstLetter = word[i][0].toUpperCase();
            let restLetters = word[i].substring(1).toLowerCase();
            camelCase += firstLetter + restLetters;
        }
    }

    if(camelCase){
        outputBox[7].textContent = "CamelCase : " + camelCase;
    }else{
        outputBox[7].textContent = "CamelCase : None";  
    }
    const na = ["Length : ", "Uppercase : ", "Lowercase : ", "MiddleChar : ", "TotalWords : ", "Vowels : ", "Consonents : ", "CamelCase : "];
    if(str === "")
    {
        for(let i=0;i<outputBox.length;i++)
        {
            outputBox[i].textContent = na[i] + "None";
        }
        lableline.style.opacity = "1";
    }
    else
    lableline.style.opacity = "0";


});