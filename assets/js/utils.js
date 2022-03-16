//Date today 
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("today").innerHTML = month + "/" + day + "/" + year;

//Hide menu
let nDialog = document.getElementById("dialog-note")
let closeDialog = document.getElementById("popup-close")

nDialog.style.display = 'none'

function isHideMenu(isHide){
    if(isHide){
        nDialog.style.display = 'none'
    }else{
        nDialog.style.display = 'block'
    }
};

function getResponse(){
    var ele = document.getElementsByName("pays"); //Tableau name
    console.log(ele.length);
     
    for(i = 0; i < ele.length; i++) {
        console.log(ele[i].value);
        
        if(ele[i].checked){
            document.getElementById("aze").innerHTML = calculTauxReussite() +"%";                
        }
    }
}

//Listenner
document.getElementById("buttonValid").addEventListener("click", getResponse);

//Update progress 
function calculTauxReussite() {
    let nbRespEchec = 2;
    let nbQuestion = 3;
    return (nbRespEchec * nbQuestion)/100;
}

let progress = document.getElementById("progress").value = "70"
//var textProgress = document.getElementById("aze").innerText = calculTauxReussite() +"%"