/*Name this external file gallery.js*/

function upDate(previewPic){
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerElement = previewPic.alt;
    console.log("Image updated: " + previewPic.alt);
     }
   
function unDo(){
      var imageDiv = document.getElementById("image");
      imageDiv.style.backgroundImage = "url('')";
      imageDiv.innerHTML = "Hover over an image below to display here";
      console.log("Image reset");
}
function initializeGallery() {
    var images = document.querySelectorAll(".preview");
    images.forEach(img => {
        img.setAttribute("tabindex", "0")
    });
    console.log("Gallery initialized")
}