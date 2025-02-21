const change = document.querySelector(".overview2");
const chang = document.querySelector(".overview1");
const chan = document.querySelector(".overview3");
const cha = document.querySelector(".over");
const btn = document.querySelector(".btn");

let a = true;

btn.addEventListener("click", function () {
    if (a) {
        // Move .overview2 smoothly using transform
        change.style.transform = "translateX(300px)";
        change.style.transition = "transform 0.5s ease-in-out";

        // Change text & styles
        btn.innerText = "sky_info";
        chang.style.backgroundColor = "red";
        cha.style.backgroundColor = "yellow";
        cha.style.boxShadow = "white 2px 2px 10px";
        
        a = false;
    } else {
        // Reset movement
        change.style.transform = "translateX(0)";
        
        // Change text & styles
        btn.innerText = "red_info";
        chan.style.backgroundImage = "url('image.jpg')";
        chan.style.boxShadow = "red 0px 0px 10px";
        cha.style.backgroundColor = "white";
        cha.style.boxShadow = "white 2px 2px 10px";

        a = true;
    }
});
