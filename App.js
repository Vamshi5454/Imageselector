var topImage = document.getElementById("top-image");
var images = document.getElementsByClassName("images");
console.log(images);

var imagesArray = Array.from(images);
var updatedIndex = 1;

function changeImage(i) {
  console.log(" in funcu" + i);
  topImage.src = `./images/cat${i}.webp`;

  let index = imagesArray.findIndex(function (image) {
    return image.src === topImage.src;
  });

  updatedIndex = index + 1;
  console.log(updatedIndex);
}

for (let i = 0; i <= images.length; i++) {
  document.images[i].addEventListener("click", function () {
    // console.log(images);
    changeImage(i);
  });
}

document.getElementById("left").addEventListener("click", function () {
  let value = updatedIndex;
  console.log(" in left" + value);

  if (value == 1) {
    changeImage(images.length - 1);
  } else {
    changeImage(value - 1);
  }
});

document.getElementById("right").addEventListener("click", () => {
  let value = updatedIndex;
  console.log("in right" + value);
  //   changeImage(value + 1);
  if (value == images.length) {
    changeImage(1);
  } else {
    changeImage(value + 1);
  }
});
