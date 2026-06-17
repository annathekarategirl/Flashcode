//Have func for looping, stopping, chinese vs spanish,


//document.getElementById("chinese").addEventListener("click",function(){//calls looping function but passes cnlist
  //  })


function random(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];}

document.addEventListener("keydown",function(keystroke){
    if(keystroke.code=="KeyQ"){
        cnButton.click();
    }
    if(keystroke.code=="KeyE"){
        reveal.click()
    }
})

let cnButton= document.getElementById("chinese")
let txtDisplay=document.getElementById("txtdisplay")
let pronounceTxt=document.getElementById("pronounce")
let meaningTxt=document.getElementById("meaning")
//console.log(random(cnlist))
cnButton.addEventListener("click",function(){
    meaningTxt.textContent=""
    pronounceTxt.textContent=""
    let current=random(cnlist);
    txtDisplay.textContent=current[0]
    if(!document.getElementById("reveal")){
    let reveal= document.createElement("button")
    reveal.textContent="reveal"
    reveal.id="reveal"
    document.body.appendChild(reveal)
    reveal.addEventListener("click",function(){pronounceTxt.textContent=current[1];
        meaningTxt.textContent=current[2];
        document.body.removeChild(reveal)})
    }
    })