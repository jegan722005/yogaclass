//next or prev image

var slider_img = document.querySelector('.slider-img');
var images = ['../image/class0.jpg', '../image/class1.jpg', '../image/class2.jpg', '../image/class4.jpg',];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

//input type
   function typeing(){
    debugger;
    var a = document.querySelector("#jegan").value;

    document.querySelector("#j").innerHTML= a;
}

//darkmode and lightmode
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
});