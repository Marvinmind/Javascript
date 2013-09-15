Name = new Object();

Name.Vorname="Martin";
Name.Nachname="Schwarzmaier";


document.getElementById("output").
document.getElementById("output").innerHTML="blabla mr "+Name.Nachname;

function onClickTextField(id){
	object = document.getElementById(id);
	object.style.backgroundColor= "red";
	if(object.value=="test"){
		object.style.backgroundColor = "blue";
	}
}
