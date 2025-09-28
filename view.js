function updateView(){
let HTML = document.getElementById("app").innerHTML = /*HTML*/ `
<div><img id="M8" src="Magic_8_ball.png"></div>
<input type="text" onchange="AskQuetion(this.value)" placeholder="Still et spørsmål her">
<p id="Answers">sdsda<p>












`
}

updateView()