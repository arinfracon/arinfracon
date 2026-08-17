

/* DARK MODE */

const themeButton =
document.getElementById(
"themeToggle"
);

themeButton.addEventListener(
"click",
function () {

document.body.classList.toggle(
"dark-mode"
);

}
);

/* STYLE QUIZ */

const quizButtons =
document.querySelectorAll(
".quiz-btn"
);

const quizResult =
document.getElementById(
"quizResult"
);

quizButtons.forEach(button => {

button.addEventListener(
"click",
function () {

quizResult.innerText =
"You selected: " +
this.innerText;

}
);

});

/* BACK TO TOP */

const topButton =
document.getElementById(
"topButton"
);

window.addEventListener(
"scroll",
function () {

if (
window.pageYOffset > 400
) {

topButton.style.display =
"block";

} else {

topButton.style.display =
"none";

}

}
);

topButton.addEventListener(
"click",
function () {

window.scrollTo({

top: 0,

behavior: "smooth"

});

}
);

function calculatePrice() {

    const areaInput =
        document.getElementById("area");

    const result =
        document.getElementById("priceResult");

    const area =
        parseFloat(areaInput.value);

    if (!area || area <= 0) {

        result.innerHTML =
            "Please enter a valid area.";

        return;
    }

    const rate = 2300;

    const total = area * rate;

    result.innerHTML =
        "Estimated Cost: ₹" +
        total.toLocaleString("en-IN");
}

/* IMAGE VIEWER */

const galleryImages =
document.querySelectorAll(
".gallery-image"
);

const lightbox =
document.getElementById(
"lightbox"
);

const lightboxImage =
document.getElementById(
"lightboxImage"
);

const closeButton =
document.getElementById(
"close"
);

galleryImages.forEach(image => {

    image.addEventListener(
        "click",
        function () {

            lightbox.style.display =
            "flex";

            lightboxImage.src =
            this.src;

        }
    );

});

closeButton.addEventListener(
"click",
function () {

    lightbox.style.display =
    "none";

}
);

function calculateEstimate() {

    const area =
        parseFloat(
            document.getElementById("area").value
        ) || 0;

    const living =
        parseInt(
            document.getElementById("living").value
        ) || 0;

    const kitchen =
        parseInt(
            document.getElementById("kitchen").value
        ) || 0;

    const bedroom =
        parseInt(
            document.getElementById("bedroom").value
        ) || 0;

    const wardrobe =
        parseInt(
            document.getElementById("wardrobe").value
        ) || 0;

    const tv =
        parseInt(
            document.getElementById("tv").value
        ) || 0;

    let total = area * 2300;

    total += living * 30000;

    total += kitchen * 80000;

    total += bedroom * 50000;

    total += wardrobe * 25000;

    total += tv * 20000;

    document.getElementById(
        "estimate"
    ).innerText =
        "₹" +
        total.toLocaleString(
            "en-IN"
        );

}

const images = [

    "images/slider/1.jpg",

    "images/slider/2.jpg",

    "images/slider/3.jpg",

    "images/slider/4.jpg"

];

let index = 0;

setInterval(() => {

    index++;

    if (index >= images.length) {

        index = 0;

    }

    document.getElementById(
        "sliderImage"
    ).src = images[index];

}, 3000);

const elements =
document.querySelectorAll(
    ".animate"
);

window.addEventListener(
    "scroll",
    () => {

        elements.forEach(
            element => {

                const position =
                element.getBoundingClientRect()
                .top;

                if (position < 700) {

                    element.classList.add(
                        "show"
                    );

                }

            }
        );

    }
);