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

$(".squaresInline").hover(function(){
    $(this).filter(':not(:animated)').animate(
        {
            width: '100%',
            height: '100%',
        });
        $(this).css('z-index', '2');
    },
    function(){
        $(this).animate(
        {
            width: '50%',
            height: '50%',
        },function(){
            $(this).css('z-index', '1');
        });
        

    });
});
  
