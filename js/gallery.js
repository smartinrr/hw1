/*Name this external file gallery.js*/
let x = document.getElementById(`image`);

function upDate(previewPic){
	console.log("Mouse on the image");
	console.log("Alt: "+ previewPic.alt);
	console.log("Src: "+ previewPic.src);
 
	x.style.backgroundImage = `url(${previewPic.src})`;
  
	x.style.backgroundColor = "pink";
  
	x.innerHTML = previewPic.alt;
	}

function unDo(){
  
	x.style.backgroundImage = ""; 
    
	x.style.backgroundColor = "";
    
	x.innerHTML = "Hover over an image below to display here.";	
	}
