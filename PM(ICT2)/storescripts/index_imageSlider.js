var imageCount = 1;
var total = 2;

function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "style/img"+ imageCount +".jpg";
	}
	
window.setInterval(function photoA() {
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "style/img"+ imageCount +".jpg";
	},5000);
	
function slidelink(){
 if (imageCount == 1)
  window.location = "coming_soon.html"
 else if (imageCount == 2)
  window.location = "coming_soon.html"
}