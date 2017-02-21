function eachColor(){
	var image = document.getElementById("waldoImage");
	var source = "file:///Users/Wipf/Code/projects/tutorial/images/waldo.jpeg"

	if (image.src == source){

		image.src = "images/waldo2.jpeg";

	} else {

		image.src = "images/waldo.jpeg";
	}	
}
var myLoop = setInterval(eachColor, 5000);