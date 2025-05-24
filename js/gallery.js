/*Name this external file gallery.js*/
let x = document.getElementById(`image`);

function upDate(previewPic){
 
  x.style.backgroundImage = `url(${previewPic.src})`;
  
  x.style.backgroundColor = "pink";
  
  x.innerHTML = previewPic.alt;
	}

	function unDo(){
  
   x.style.backgroundImage = ""; 
    
   x.style.backgroundColor = "";
    
   x.innerHTML = "Hover over an image below to display here.";	
	}