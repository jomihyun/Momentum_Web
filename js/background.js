const images = [ "1.jpeg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimg = document.createElement("img");
const galley = document.querySelector(".galley");

bgimg.src = `img/${chosenImage}`;
galley.appendChild(bgimg);