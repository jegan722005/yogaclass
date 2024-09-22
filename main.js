function bott(){
    let image=document.getElementById('image');
    let images=['image/je1.jpg','image/je2.jpg','image/je3.jpg','image/je4.jpg','image/je5.jpg','image/je6.jpg','image/je7.jpg','image/je8.jpg','image/je9.jpg','image/je10.jpg','image/je11.jpg','image/je12.jpg','image/img6.jpg','image/img4.jpg','image/img2.jpg',];
    let random= Math.floor(Math.random() * 15);
    image.src =images[random];
}

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function changeimage(){
    let displayImage = document.getElementById('image1');
    if(displayImage.src.match('image/std.jfif')){
        displayImage.src = './image/yoga2.jpg'
        //   displayImage.src = './image/yoga4.jpg'
        //    displayImage.src = './image/yoga5.jpg'
    }else{
         displayImage.src = 'image/std.jfif'
    }
}
function image(){
    let displayImage = document.getElementById('image2');
    if(displayImage.src.match('image/img6.jpg')){
         displayImage.src = './image/yoga3.jpg'
    }else{
         displayImage.src = 'image/img6.jpg'
    }
}
function add(){
    let displayImage = document.getElementById('image3');
    if(displayImage.src.match('image/p6.jpg')){
          displayImage.src = './image/yoga4.jpg'
    }else{
         displayImage.src = 'image/p6.jpg'
    }
}
function change(){
    let displayImage = document.getElementById('image4');
    if(displayImage.src.match('image/yoga10.jpg')){
           displayImage.src = './image/yoga5.jpg'
    }else{
         displayImage.src = 'image/yoga10.jpg'
    }
}
function inside(){
    let displayImage = document.getElementById('image5');
    if(displayImage.src.match('image/p8.jpg')){
           displayImage.src = './image/je4.jpg'
    }else{
         displayImage.src = 'image/p8.jpg'
    }
}