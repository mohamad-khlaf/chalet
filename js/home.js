

// Get the modal
var modal = document.getElementById("openImgModal");

// Get Img IN Modal
var modalImg = document.getElementById("openImgModal__img");
// Get Caption IN Modal
var captionText = document.getElementById("openImgModalCaption");

// Get All Imgs 
let testimonialsImg = document.querySelectorAll('.img-to-open-js');
testimonialsImg.forEach(function(img) {
    img.addEventListener('click', function () {
        modal.classList.add("flex-js");
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        console.log(img);
    })
})


// Get the <span> element that closes the modal
var span = document.querySelector(".openImgModalCloseBtn");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  
	modal.classList.remove("flex-js");
}

