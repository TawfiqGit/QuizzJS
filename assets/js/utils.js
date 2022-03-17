//Title
document.getElementById("theme").innerHTML = "Histoire"

//Date today 
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("today").innerHTML = month + "/" + day + "/" + year;

//Hide PopUp
let nDialog = document.getElementById("dialog-note")
let closeDialog = document.getElementById("popup-close")

nDialog.style.display = 'none'

function isHidePopUp(isHide){
    if(isHide){
        nDialog.style.display = 'none'
    }else{
        nDialog.style.display = 'block'
    }
};

//Content Question
function launchValidateAnswer(nbAnswer){
    var tab = new Array(nbAnswer);
    var nbRespEchec = 0;

    tab[0] = checkAnswer("date","b");
    tab[1] = checkAnswer("pays","c");
    tab[2] = checkAnswer("ville","a");
    tab[3] = checkAnswer("album","d");
    
    for(let i = 0 ; i < tab.length ; i++){
       if(tab[i] == false){
           nbRespEchec++
       }
    }
    console.log("nbRespEchec "+nbRespEchec +" | " +"nbAnswer "+tab.length)
    let tauxReussitePrc = calculTauxReussite(nbRespEchec ,tab.length)

    document.getElementById("taux").innerHTML = tauxReussitePrc +"%"; 
    moveProgress(tauxReussitePrc);
}

function checkAnswer(name,respValid){
    var ele = document.getElementsByName(name); //Tableau
    for(i = 0; i < ele.length; i++) {        
        let resp =ele[i]
        if(resp.checked){
            if(resp.value == respValid){
                return true
            }
        }
    }
    return false
}

function moveProgress(tauxReussite) {
    var start = 0;
    console.log("moveProgress start "+start)

    if (start == 0) {
        start = 1;
        let progress = document.getElementById("progress")
        var width = 1;
        var idInterval= setInterval(moveInterval, 12); 
       
        function moveInterval(){
            if (width >= tauxReussite) {
                clearInterval(idInterval);
            } else {
                width++; 
                progress.value = width; 
                console.log("moveProgress width "+width)
            }
        }  
    }
}

function calculTauxReussite(nbRespEchec,nbQuestion) {
    let tauxEchec = (nbRespEchec/ nbQuestion)*100
    return (100 - tauxEchec).toFixed(2);
}