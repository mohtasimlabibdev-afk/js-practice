const bulb = document.getElementById("bulb");

const turnOn = () => {
      bulb.src = "img/on.jpg";

};
const turnOff = () => {
      bulb.src = "img/off.jpg";
};
document.getElementById("onBtn")
    .addEventListener("click", turnOn);

document.getElementById("offBtn")
    .addEventListener("click", turnOff);

const scene = document.getElementById("scene");

const night = () => {
      scene.src = "img/image_c78f9073.jpg";
};

const day = () => {
      scene.src = "img/image_e665dbc3.jpg";
};

document.getElementById("night").addEventListener("click", night);
document.getElementById("day").addEventListener("click", day);



