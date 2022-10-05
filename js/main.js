// js for food-menu
var datamap = new Map([
    [document.getElementById("myBtn"), document.getElementById("myModal")],
    [document.getElementById("myBtn1"), document.getElementById("myModal1")],
    [document.getElementById("myBtn2"), document.getElementById("myModal2")],
    [document.getElementById("myBtn3"), document.getElementById("myModal3")]
]);

datamap.forEach((value, key) => {
    doModal(key, value);
});

function doModal(anchor, popupbox) {

    // Get the <span> element that closes the modal
    var span = popupbox.getElementsByClassName("close")[0];

    anchor.addEventListener("click", function(event) {
        popupbox.style.display = "block";
    });

    span.addEventListener("click", function(event) {
        popupbox.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popupbox) {
            popupbox.style.display = "none";
        }
    });
}



// js for marquee
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}