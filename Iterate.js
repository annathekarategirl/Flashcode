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
    if(keystroke.code=="KeyW"){
        esButton.click();
    }
})

let cnButton= document.getElementById("chinese")
let esButton=document.getElementById("spanish")
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
    cnButton.disabled=true;esButton.disabled=true;
    document.body.appendChild(reveal)
    reveal.addEventListener("click",function(){pronounceTxt.textContent=current[1];
        meaningTxt.textContent=current[2];
        document.body.removeChild(reveal);cnButton.disabled=false;esButton.disabled=false;})
    }
    })


esButton.addEventListener("click",function(){
    meaningTxt.textContent=""
    pronounceTxt.textContent=""
    let current=random(eslist);
    txtDisplay.textContent=current[0]
    if(!document.getElementById("reveal")){
    let reveal= document.createElement("button")
    reveal.textContent="reveal"
    reveal.id="reveal"
    esButton.disabled=true;cnButton.disabled=true;
    document.body.appendChild(reveal)
    reveal.addEventListener("click",function(){pronounceTxt.textContent=current[1];
        document.body.removeChild(reveal);esButton.disabled=false;cnButton.disabled=false;})
    }
    })


const DLM=document.getElementById("darkmode");
function togglemode(){
    if( document.body.style.backgroundColor="white"){ document.body.style.backgroundColor="black"}
    else{document.body.style.backgroundColor="white"}
//change text color and add this to event listener
}