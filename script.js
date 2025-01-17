//main-content
var i = 0;
var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
var time = 3000;

function changeImg(){
    var imgElement = document.getElementById("slideshow-image");

    imgElement.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;