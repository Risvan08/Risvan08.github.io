function button(numb){
    document.getElementById("tab").value=document.getElementById("tab").value+numb
}
function remove(){
    document.getElementById("tab").value=""
}
function equalclick(){
    console.log("haaaiii")
    let wer=document.getElementById("screen").value
    let rew=eval(wer)
    document.getElementById('screen').value=rew
}

