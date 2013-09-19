Name = new Object();

Name.Vorname="Martin";
Name.Nachname="Schwarzmaier";

function onClickTextField(id){
	object = document.getElementById(id);
	object.style.backgroundColor= "red";
	if(object.value=="test"){
		object.style.backgroundColor = "blue";
	}
}
 function onChangeListener(id){
    object = document.getElementById(id);
    if (object.value=="orange"){
        object.style.backgroundColor = "orange";
    }
    else
                object.style.backgroundColor = "white";
}
$(document).ready(function(){
    $(".hideable").hide();
    });
$(document).ready(function(){
    $("#squaresContainer").animate(
        function(){
            width: 80px;
            height: 80px;
        },
        fast
    )});
  
