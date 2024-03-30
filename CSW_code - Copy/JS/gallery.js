// DECLARING VARIABLES AND CONSTANTS

const galleryItems = document.getElementsByClassName("gallery_item");
const extendedViews = document.getElementsByClassName("extended_view");
const extendedViewContainer = document.getElementById("extended_view_container");
let galleryContainer = document.getElementById("container");
let header = document.getElementById("header");
let backIcon = document.getElementById("backIcon");
let personalisationBar = document.getElementById('personalisationBar');
//console.log(galleryItems, extendedViews);

// EVENTS

    // WHEN CLICKED ON GALLERY ITEM
for(let i=0; i<galleryItems.length; i++){
    galleryItems[i].addEventListener("click", function() {
        // ITEMS TO HIDE
        //galleryContainer.style.display = "none";
        //header.style.display = "none";
        // ITEMS TO VIEW
        extendedViewContainer.style.display = "block";
        extendedViews[i].style.display = "block";
        backIcon.style.display = "inline";
        personalisationBar.style.display = "flex";
    });
}

    // WHEN CLICKED ON BACK ICON
backIcon.addEventListener("click", function() {
    // ITEMS TO HIDE
    extendedViewContainer.style.display = "none";
    for(let i=0; i<extendedViews.length; i++){
        extendedViews[i].style.display = "none";
    }
    backIcon.style.display = "none";
    personalisationBar.style.display = "none";
    // ITEMS TO VIEW
    galleryContainer.style.display = "grid";
    header.style.display = "block";
    
});

// FUNCTIONS
/*
function displayExtendedView() {
    galleryContainer.style.display = "none";
};

function closeExtendedView() {
    galleryContainer.style.display = "grid";
};
*/

// CHANGE OF FONT
    // TO "Roboto"
document.getElementById("roboto-regular").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
        if(extendedViews[i].style.display==="block"){
            extendedViews[i].classList.add("roboto-regular");
            break;
        };
    }
});
    // TO "Montseraat"