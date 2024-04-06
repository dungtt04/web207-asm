var index = 0;
var duongdan = "./images/";
var imgs = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg","banner5.jpg"];

function previousImg() {
  if (index < 0) {
    index--;
  } else {
    index = imgs.length - 1;
  }
  document.getElementById("anh").src = duongdan + imgs[index];
}
function nextImg() {
  if (index < imgs.length - 1) {
    index++;
  } else {
    index = 0;
  }
  document.getElementById("anh").src = duongdan + imgs[index];
}
var prev = document.querySelector("#prev");
prev.addEventListener("click", previousImg);
next = document.querySelector("#next");
next.addEventListener("click", nextImg);
setInterval(nextImg, 3000);
